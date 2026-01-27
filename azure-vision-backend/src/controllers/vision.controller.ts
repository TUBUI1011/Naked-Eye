import { Request, Response, NextFunction } from "express";
import { VisionService } from "../services/vision.service";

export class VisionController {
  // Service nhận qua constructor từ file routes
  constructor(private readonly visionService: VisionService) {}

  // Chỉ dùng 1 hàm duy nhất xử lý request Express
  public validateCode = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { image, expectedText, scenario } = req.body;

      // 1. Kiểm tra dữ liệu đầu vào (Validation)
      if (!image || typeof image !== "string") {
        return res.status(400).json({ 
          message: "Lỗi: 'image' bắt buộc và phải là chuỗi Base64" 
        });
      }
      
      if (!expectedText || typeof expectedText !== "string") {
        return res.status(400).json({ 
          message: "Lỗi: 'expectedText' bắt buộc và phải là chuỗi kỹ tự" 
        });
      }

      // 2. Gọi logic xử lý ảnh từ Service
      const result = await this.visionService.processAndValidateImage(
        image,
        expectedText,
        scenario // (Optional) có thể là undefined
      );

      // 3. Trả về kết quả
      return res.status(200).json(result);

    } catch (err) {
      console.error("Lỗi tại VisionController:", err);
      // Chuyển lỗi xuống middleware xử lý lỗi chung (nếu có)
      next(err);
    }
  };
}