# Julian Date And Batch Code Display

Công cụ web hỗ trợ tính toán và hiển thị Batch Code, ngày sản xuất (NSX), và hạn sử dụng (HSD) cho các dây chuyền sản xuất tại nhà máy. Ứng dụng cũng tích hợp tính năng xác thực mã code bằng camera của thiết bị di động.

## Tính Năng Nổi Bật

- **Hiển thị Thông tin Tự động:** Tự động tính toán và hiển thị Batch Code và HSD cho tất cả các dây chuyền dựa trên ngày hiện tại.
- **Bảng tra cứu nhanh:** Cung cấp các bảng thông tin riêng biệt cho khu vực **Packing Line** và **Filling Machine**.
- **Công cụ Tính toán Ngược:** Cho phép người dùng tính NSX từ Batch Code hoặc HSD.
- **Xác thực bằng Camera (OCR):** Sử dụng camera của thiết bị để đọc và xác thực mã code (Stick, Bag, Carton) so với dữ liệu hệ thống.

---

## Quy Trình Tối Ưu Hóa OCR Nâng Cao

Để giải quyết các thách thức khi nhận dạng ký tự trong môi trường công nghiệp (nhiễu, rung, lóa, nền màu đa dạng), tính năng xác thực bằng camera đã được nâng cấp với một quy trình xử lý ảnh chuyên sâu, ưu tiên độ chính xác tuyệt đối.

Quy trình xử lý mỗi khi người dùng nhấn nút "Capture" bao gồm 6 bước:

### Bước 1: Định vị Thủ công (User-Guided Framing)

- Người dùng sử dụng một "khung ngắm" (viewfinder) hình chữ nhật trên màn hình để căn chỉnh và đưa dòng mã code vào vùng lấy nét của camera.
- **Mục tiêu:** Đảm bảo ảnh đầu vào có chất lượng tốt nhất, giảm mờ và out-net.

### Bước 2: Cắt ảnh Lần 1 (Physical Crop)

- Hệ thống chụp lại toàn bộ khung hình từ camera.
- Dựa vào vị trí của khung ngắm, một vùng ảnh chữ nhật được cắt ra.
- **Mục tiêu:** Loại bỏ phần lớn các chi tiết thừa bên ngoài vùng quan tâm.

### Bước 3: Tiền xử lý Ảnh (Advanced Pre-processing)

Ảnh sau khi cắt lần 1 sẽ được xử lý qua các bộ lọc để chuẩn hóa:

1.  **Tăng độ tương phản (Contrast Enhancement):** Làm nổi bật các chấm mực in so với màu nền của bao bì.
2.  **Nhị phân hóa (Binarization):** Chuyển ảnh sang dạng đen-trắng hoàn toàn. Bước này loại bỏ yếu tố màu sắc, giúp thuật toán hoạt động ổn định trên mọi loại nền (đỏ, xanh, đen, trắng...).

### Bước 4: Tự động Cắt ảnh Lần 2 (Intelligent Auto-Cropping)

Đây là bước tối ưu hóa quan trọng nhất để đạt độ chính xác cao.

1.  Hệ thống phân tích ảnh đen-trắng từ Bước 3 để tìm tất cả các "khối" pixel đen liền kề nhau (thuật toán Connected-component).
2.  Nó xác định khối lớn nhất, đây được giả định là dòng văn bản cần đọc.
3.  Một hình chữ nhật bao quanh chính xác khối văn bản này (`bounding box`) được tạo ra.
4.  Hệ thống thực hiện **cắt ảnh lần thứ hai**, chỉ giữ lại vùng ảnh bên trong `bounding box` này (có thêm một chút đệm để tránh mất ký tự).

- **Mục tiêu:** Tạo ra một bức ảnh cuối cùng **siêu sạch**, chỉ chứa duy nhất dòng văn bản trên nền trắng, loại bỏ 100% các khoảng trống, nhiễu và artwork còn sót lại sau lần cắt đầu tiên.

### Bước 5: Nhận dạng Ký tự (Optimized OCR Recognition)

- Bức ảnh siêu sạch từ Bước 4 được gửi đến Tesseract.js.
- **Cấu hình tối ưu được áp dụng:**
  - `PSM 7 (Single Line)`: "Ra lệnh" cho AI chỉ tìm kiếm một dòng văn bản duy nhất.
  - `Whitelist`: Cung cấp một danh sách các ký tự hợp lệ (`0-9`, `A-Z`, `/`, `.`, `:`...) để ngăn Tesseract đoán sai ra các ký tự không liên quan.

### Bước 6: Xác thực Kết quả (Flexible Validation)

- Chuỗi văn bản do OCR trả về được so sánh với dữ liệu mong đợi của hệ thống.
- Logic so sánh sử dụng Biểu thức chính quy (Regex) linh hoạt, có khả năng bỏ qua các lỗi nhỏ như khoảng trắng thừa hoặc ký tự nhiễu không mong muốn.

**Kết quả:** Quy trình xử lý đa bước này đảm bảo Tesseract nhận được dữ liệu đầu vào lý tưởng nhất, giúp tăng vọt độ chính xác nhận dạng ngay cả trong các điều kiện khó khăn nhất.


# Azure Vision Backend

This project is a Node.js backend application that integrates with Microsoft Azure Vision AI for image analysis. It allows users to upload images and receive text extracted from those images using Optical Character Recognition (OCR).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/azure-vision-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd azure-vision-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` template and fill in your Azure Vision API credentials.

## Usage

1. Start the server:
   ```
   npm run start
   ```

2. The server will run on `http://localhost:3000` (or the port specified in your configuration).

## API Endpoints

- `POST /api/vision/analyze`: Upload an image for analysis. The image should be sent as a binary file in the request body.

## Testing

To run the tests, use the following command:
```
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.