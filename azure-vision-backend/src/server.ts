import express from "express";
import cors from "cors"; // 1. Thêm dòng import này
import visionRoutes from "./routes/vision.routes";
import { errorHandler } from "./middlewares/errorHandler";
import * as dotenv from "dotenv";

// Nạp biến môi trường ngay lập tức
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Kích hoạt CORS (Nên đặt trước các cấu hình khác)
app.use(cors());

// Cấu hình giới hạn để nhận ảnh Base64
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Đăng ký route với tiền tố /api/vision
app.use("/api", visionRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
