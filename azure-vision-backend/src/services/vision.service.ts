import createClient from "@azure-rest/ai-vision-image-analysis";
import { AzureKeyCredential } from "@azure/core-auth";
import * as config from "../config/index";
import sharp from "sharp";
import * as dotenv from "dotenv"; // để tải biến môi trường
dotenv.config();

// CHỈNH SỬA: Đưa việc khởi tạo vào trong hàm hoặc kiểm tra kỹ config
export async function analyzeImageFromBuffer(
  imageBase64: string,
): Promise<string> {
  try {
    const endpoint = process.env.AZURE_VISION_ENDPOINT;
    const key = process.env.AZURE_VISION_KEY;

    if (!key || !endpoint) {
      throw new Error(
        "Azure Key hoặc Endpoint đang bị trống. Kiểm tra file .env",
      );
    }

    // --- THÊM ĐOẠN NÀY ĐỂ XỬ LÝ LỖI ĐỊNH DẠNG ---
    // 1. Loại bỏ tiền tố "data:image/..." nếu có
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    // 2. Chuyển chuỗi sạch thành Buffer thực sự để Sharp hiểu được
    const imageBuffer = Buffer.from(cleanBase64, "base64");
    // --------------------------------------------

    const client = createClient(endpoint, new AzureKeyCredential(key));

    // 1. Dùng Sharp làm nét ảnh mã lô (Inkjet)
    const processedBuffer = await sharp(imageBuffer)
      .grayscale() // Chuyển về trắng đen để AI tập trung vào nét chữ
      .threshold(120) // THÊM DÒNG NÀY: Giúp tách biệt rõ chữ đen trên nền trắng
      .sharpen({ sigma: 2.0 }) // Tăng độ sắc nét lên một chút
      .toBuffer();

    // 2. Gửi ảnh lên Azure
    const result = await client.path("/imageanalysis:analyze").post({
      body: processedBuffer,
      queryParameters: { features: ["Text"] },
      contentType: "application/octet-stream",
    });

    const iaResult: any = result.body;

    // 3. Trích xuất văn bản
    if (iaResult.readResult && iaResult.readResult.blocks) {
      return iaResult.readResult.blocks
        .map((block: any) =>
          block.lines.map((line: any) => line.text).join(" "),
        )
        .join("\n");
    }

    return "Không tìm thấy nội dung";
  } catch (error) {
    console.error("Lỗi tại Vision Service:", error);
    throw error;
  }
}
