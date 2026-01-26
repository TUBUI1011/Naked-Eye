import * as dotenv from "dotenv";

// Tải biến môi trường từ file .env
dotenv.config();

const getResourceConfig = () => {
  const endpoint = process.env.AZURE_VISION_ENDPOINT;
  const key = process.env.AZURE_VISION_KEY;
  const port = process.env.PORT || "3000";

  // KIỂM TRA: Nếu thiếu một trong hai thông số quan trọng, server sẽ dừng ngay lập tức
  if (!endpoint || !key) {
    console.error("❌ THIẾU CẤU HÌNH AZURE:");
    console.error(
      "Vui lòng kiểm tra lại file .env (AZURE_VISION_ENDPOINT và AZURE_VISION_KEY)",
    );

    // Throw lỗi để server không thể chạy tiếp với dữ liệu rỗng
    throw new Error("Missing Azure Vision configuration");
  }

  return {
    azureVisionEndpoint: endpoint,
    azureVisionKey: key,
    port: parseInt(port, 10),
  };
};

// Export một hằng số config duy nhất
export const config = getResourceConfig();
