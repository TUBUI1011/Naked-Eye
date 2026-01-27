import { Router } from "express";
import { VisionController } from "../controllers/vision.controller";
import { VisionService } from "../services/vision.service";

const router = Router();

// 1. Khởi tạo Service trước (không tham số)
const visionService = new VisionService();

// 2. Truyền Service vào Controller
const visionController = new VisionController(visionService);

// 3. Định nghĩa route
// Frontend gọi: POST http://localhost:3000/api/validate-code
router.post("/validate-code", visionController.validateCode);

export default router;
