import { Router } from "express";
import { VisionController } from "../controllers/vision.controller";

const router = Router();
const visionController = new VisionController();

router.post("/analyze", visionController.analyzeImage);

export default router;
