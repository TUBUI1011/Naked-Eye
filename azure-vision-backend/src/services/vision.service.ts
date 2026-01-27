import sharp from "sharp"; // Sửa lại cách import sharp để gọi được hàm sharp()
import * as fs from "fs";
import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import { config } from "../config";

interface Scenario {
  id: string;
  process: (img: sharp.Sharp) => sharp.Sharp;
}

export class VisionService {
  private readonly visionClient: ComputerVisionClient;

  constructor() {
    this.visionClient = new ComputerVisionClient(
      new ApiKeyCredentials({
        inHeader: {
          "Ocp-Apim-Subscription-Key": config.azureVisionKey,
        },
      }),
      config.azureVisionEndpoint,
    );
  }

  async processAndValidateImage(
    base64Image: string,
    expectedText: string,
    scenarioType?: string,
  ) {
    try {
      const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(cleanBase64, "base64");

      // Debug: Lưu ảnh gốc
      try {
        fs.writeFileSync("debug_original.jpg", imageBuffer);
      } catch (e) {}

      const scenarios: Scenario[] = [
        {
          id: "dot",
          // Thêm kiểu dữ liệu : sharp.Sharp cho tham số img
          process: (img: sharp.Sharp) =>
            img.greyscale().median(2).resize(1200).threshold(140),
        },
        {
          id: "laser",
          process: (img: sharp.Sharp) =>
            // Thay modulate({ contrast: ... }) bằng lienar(3) để tăng tương phản gấp 3 lần
            img.greyscale().linear(3).threshold(150),
        },
        {
          id: "solid",
          process: (img: sharp.Sharp) =>
            img.greyscale().sharpen().threshold(120),
        },
      ];

      const currentScenario =
        scenarios.find((s) => s.id === scenarioType) || scenarios[2];

      // Gọi sharp(imageBuffer) sẽ không còn bị lỗi đỏ nhờ sửa import ở trên
      const processedBuffer = await currentScenario
        .process(sharp(imageBuffer))
        .toBuffer();

      // Debug: Lưu ảnh đã xử lý
      try {
        fs.writeFileSync(`debug_${currentScenario.id}.jpg`, processedBuffer);
      } catch (e) {}

      const ocrResult = await this.performOcr(processedBuffer);
      const isSuccess = this.compareResults(ocrResult, expectedText);

      return {
        success: isSuccess,
        foundText: ocrResult || "Không tìm thấy text",
        expectedText,
        matchDetail: isSuccess ? "PASSED" : "FAILED",
        scenarioUsed: currentScenario.id,
      };
    } catch (error) {
      console.error("Error inside VisionService:", error);
      throw error;
    }
  }

  private async performOcr(imageBuffer: Buffer): Promise<string> {
    try {
      const result = await this.visionClient.readInStream(imageBuffer);
      const operationId = result.operationLocation?.split("/").pop();
      if (!operationId) return "";

      // Khai báo kiểu any hoặc khởi tạo null để tránh lỗi TS
      let analysisResult: any = null;
      let retries = 0;

      do {
        await new Promise((resolve) => setTimeout(resolve, 600));
        analysisResult = await this.visionClient.getReadResult(operationId);
        retries++;
        if (retries > 10) break;
      } while (
        analysisResult.status === "running" ||
        analysisResult.status === "notStarted"
      );

      if (
        analysisResult &&
        analysisResult.status === "succeeded" &&
        analysisResult.analyzeResult
      ) {
        return analysisResult.analyzeResult.readResults
          .map((page: any) =>
            page.lines.map((line: any) => line.text).join(" "),
          )
          .join(" ");
      }

      return "";
    } catch (error) {
      console.error("Azure OCR Error:", error);
      return "";
    }
  }

  private compareResults(ocrText: string, expectedText: string): boolean {
    if (!ocrText || !expectedText) return false;

    const clean = (str: string) =>
      str
        .toUpperCase()
        .replace(/O/g, "0")
        .replace(/[IL|]/g, "1")
        .replace(/[^A-Z0-9]/g, "");

    const cleanOcr = clean(ocrText);
    const cleanExpected = clean(expectedText);

    return cleanOcr.includes(cleanExpected);
  }
}
