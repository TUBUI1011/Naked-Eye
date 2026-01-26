import { Request, Response } from "express";
import * as visionService from "../services/vision.service";

export class VisionController {
  public async analyzeImage(req: Request, res: Response): Promise<void> {
    try {
      const imageBuffer = req.body.image; // Assuming the image is sent in the request body
      const text = await visionService.analyzeImageFromBuffer(imageBuffer);
      res.status(200).json({ text });
    } catch (error) {
      res.status(500).json({ error: "Failed to analyze image." });
    }
  }
}
