// =================================================================================
// KIỂM TRA TRẠNG THÁI ĐĂNG NHẬP (AUTH CHECK)
// =================================================================================
// Đoạn mã này phải được đặt ở đầu file để chạy trước tiên.
(function () {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    // Nếu chưa đăng nhập, chuyển hướng về trang login
    // Đảm bảo tên file là 'loginpage.html'
    window.location.href = "loginpage.html";
  }
})();

// =================================================================================
// KHU VỰC CẤU HÌNH TRUNG TÂM (CENTRAL CONFIGURATION)
// =================================================================================

/**
 * @const {Array<Object>} products
 * Mảng chứa thông tin cấu hình cho tất cả các dây chuyền sản xuất.
 * Đây là nơi duy nhất cần chỉnh sửa để thêm, bớt hoặc thay đổi thông tin sản phẩm.
 *
 * @property {string} group - Nhóm sản phẩm (ví dụ: "2IN1", "3IN1", "PSC").
 * @property {string} productionLine - Tên định danh của dây chuyền sản xuất.
 * @property {number} shelfLife - Hạn sử dụng của sản phẩm (tính bằng tháng).
 * @property {string} batchSuffix - Ký tự hậu tố dùng để tạo Batch Code.
 * @property {string} area - Khu vực sản xuất ("Packing" hoặc "Filling").
 * @property {string} batchId - ID của phần tử HTML để hiển thị Batch Code.
 * @property {string} expiryId - ID của phần tử HTML để hiển thị HSD cho stick.
 * @property {string} expiryBagId - ID của phần tử HTML để hiển thị HSD cho bao.
 * @property {string} expiryCartonId - ID của phần tử HTML để hiển thị HSD cho thùng.
 */
const products = [
  // =================== PACKING LINES ===================
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "SANKO 14",
    shelfLife: 12,
    batchSuffix: "X",
    batchId: "pack-batchCode",
    expiryBagId: "pack-expirationDateBag",
    expiryCartonId: "pack-expirationDateCarton",
  },
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "SANKO 12",
    shelfLife: 9,
    batchSuffix: "U",
    batchId: "pack-batchCode2",
    expiryBagId: "pack-expirationDateBag2",
    expiryCartonId: "pack-expirationDateCarton2",
  },
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "SANKO 711",
    shelfLife: 9,
    batchSuffix: "A",
    batchId: "pack-batchCode711",
    expiryBagId: "pack-expirationDateBag711",
    expiryCartonId: "pack-expirationDateCarton711",
  },
  {
    area: "Packing",
    group: "2IN1",
    productionLine: "TOPACK 34",
    shelfLife: 9,
    batchSuffix: "V",
    batchId: "pack-batchCode34",
    expiryBagId: "pack-expirationDateBag34",
    expiryCartonId: "pack-expirationDateCarton34",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "SANKO 48",
    shelfLife: 15,
    batchSuffix: "B",
    batchId: "pack-batchCode48",
    expiryBagId: "pack-expirationDateBag48",
    expiryCartonId: "pack-expirationDateCarton48",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "SANKO 26",
    shelfLife: 15,
    batchSuffix: "L",
    batchId: "pack-batchCode26",
    expiryBagId: "pack-expirationDateBag26",
    expiryCartonId: "pack-expirationDateCarton26",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "MESPACK 12",
    shelfLife: 15,
    batchSuffix: "J",
    batchId: "pack-batchCodeMes12",
    expiryBagId: "pack-expirationDateBagMes12",
    expiryCartonId: "pack-expirationDateCartonMes12",
  },
  {
    area: "Packing",
    group: "3IN1",
    productionLine: "MESPACK 3",
    shelfLife: 15,
    batchSuffix: "N",
    batchId: "pack-batchCodeMes3",
    expiryBagId: "pack-expirationDateBagMes3",
    expiryCartonId: "pack-expirationDateCartonMes3",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "MESPACK",
    shelfLife: 24,
    batchSuffix: "C",
    batchId: "pack-batchCodeGold24",
    expiryBagId: "pack-expirationDateBagGold24",
    expiryCartonId: "pack-expirationDateCartonGold24",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "MESPACK",
    shelfLife: 18,
    batchSuffix: "C",
    batchId: "pack-batchCodeMes18",
    expiryBagId: "pack-expirationDateBagMes18",
    expiryCartonId: "pack-expirationDateCartonMes18",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "PSCUNI",
    shelfLife: 18,
    batchSuffix: "N",
    batchId: "pack-batchCodeUni18",
    expiryBagId: "pack-expirationDateBagUni18",
    expiryCartonId: "pack-expirationDateCartonUni18",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "PSCTAWO",
    shelfLife: 18,
    batchSuffix: "G", // This was the packing line suffix
    batchId: "pack-batchCodeTawo18",
    expiryBagId: "pack-expirationDateBagTawo18",
    expiryCartonId: "pack-expirationDateCartonTawo18",
  },
  {
    area: "Packing",
    group: "PSC",
    productionLine: "PSCWOLF",
    shelfLife: 18,
    batchSuffix: "L", // This was the packing line suffix
    batchId: "pack-batchCodeWolf18",
    expiryBagId: "pack-expirationDateBagWolf18",
    expiryCartonId: "pack-expirationDateCartonWolf18",
  },
  // =================== FILLING MACHINES ===================
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 14",
    shelfLife: 12,
    batchSuffix: "X",
    batchId: "fill-batchCodeS14",
    expiryId: "fill-expirationDateS14",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 12",
    shelfLife: 9,
    batchSuffix: "U",
    batchId: "fill-batchCodeS12",
    expiryId: "fill-expirationDateS12",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 7 (of 711)",
    shelfLife: 9,
    batchSuffix: "A",
    batchId: "fill-batchCodeS7",
    expiryId: "fill-expirationDateS7",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "SANKO 11 (of 711)",
    shelfLife: 9,
    batchSuffix: "Y",
    batchId: "fill-batchCodeS11",
    expiryId: "fill-expirationDateS11",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "TOPACK 3 (of 34)",
    shelfLife: 9,
    batchSuffix: "V",
    batchId: "fill-batchCodeT3",
    expiryId: "fill-expirationDateT3",
  },
  {
    area: "Filling",
    group: "2IN1",
    productionLine: "TOPACK 4 (of 34)",
    shelfLife: 9,
    batchSuffix: "R",
    batchId: "fill-batchCodeT4",
    expiryId: "fill-expirationDateT4",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 4 (of 48)",
    shelfLife: 15,
    batchSuffix: "C",
    batchId: "fill-batchCodeS4",
    expiryId: "fill-expirationDateS4",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 8 (of 48)",
    shelfLife: 15,
    batchSuffix: "B",
    batchId: "fill-batchCodeS8",
    expiryId: "fill-expirationDateS8",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 2 (of 26)",
    shelfLife: 15,
    batchSuffix: "L",
    batchId: "fill-batchCodeS2",
    expiryId: "fill-expirationDateS2",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "SANKO 6 (of 26)",
    shelfLife: 15,
    batchSuffix: "T",
    batchId: "fill-batchCodeS6",
    expiryId: "fill-expirationDateS6",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "MESPACK 1 (of 12)",
    shelfLife: 15,
    batchSuffix: "J",
    batchId: "fill-batchCodeM1",
    expiryId: "fill-expirationDateM1",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "MESPACK 2 (of 12)",
    shelfLife: 15,
    batchSuffix: "K",
    batchId: "fill-batchCodeM2",
    expiryId: "fill-expirationDateM2",
  },
  {
    area: "Filling",
    group: "3IN1",
    productionLine: "MESPACK 3 (of 3)",
    shelfLife: 15,
    batchSuffix: "N",
    batchId: "fill-batchCodeM3",
    expiryId: "fill-expirationDateM3",
  },
  // =================== FILLING MACHINES - PSC ===================
  {
    area: "Filling",
    group: "PSC",
    productionLine: "PSCMES",
    shelfLife: 24,
    batchSuffix: "C",
    batchId: "fill-batchCodePscmes24",
    expiryId: "fill-expirationDatePscmes24",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "PSCMES",
    shelfLife: 18,
    batchSuffix: "C",
    batchId: "fill-batchCodePscmes18",
    expiryId: "fill-expirationDatePscmes18",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "PSCUNI",
    shelfLife: 18,
    batchSuffix: "N",
    batchId: "fill-batchCodePscuni",
    expiryId: "fill-expirationDatePscuni",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "TAM (of TAWO)",
    shelfLife: 18,
    batchSuffix: "H",
    batchId: "fill-batchCodeTam",
    expiryId: "fill-expirationDateTam",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "WOLF 1 (of TAWO)",
    shelfLife: 18,
    batchSuffix: "G",
    batchId: "fill-batchCodeWolf1",
    expiryId: "fill-expirationDateWolf1",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "WOLF 2 (of PSCWOLF)",
    shelfLife: 18,
    batchSuffix: "L",
    batchId: "fill-batchCodeWolf2",
    expiryId: "fill-expirationDateWolf2",
  },
  {
    area: "Filling",
    group: "PSC",
    productionLine: "WOLF 3 (of PSCWOLF)",
    shelfLife: 18,
    batchSuffix: "M",
    batchId: "fill-batchCodeWolf3",
    expiryId: "fill-expirationDateWolf3",
  },
];

// =================================================================================
// KHU VỰC CÁC HÀM TIỆN ÍCH (UTILITY FUNCTIONS)
// =================================================================================

/**
 * Chuẩn hóa một chuỗi bằng cách loại bỏ tất cả các khoảng trắng và chuyển thành chữ hoa.
 * @param {string} str - Chuỗi đầu vào.
 * @returns {string} - Chuỗi đã được chuẩn hóa.
 */
function normalizeString(str) {
  if (!str) return "";
  return str
    .replace(/\s+/g, "") // 1. Loại bỏ tất cả khoảng trắng
    .replace(/O/g, "0") // 2. Thay thế tất cả ký tự 'O' thành '0'
    .replace(/\d{2}:\d{2}/g, "") // 3. Loại bỏ phần thời gian (HH:MM)
    .toUpperCase(); // 4. Chuyển thành chữ hoa
}

/**
 * Lấy ngày sản xuất "kinh doanh" hiện tại.
 * Một ngày sản xuất kéo dài từ 5:40 sáng hôm nay đến 5:39 sáng hôm sau.
 * @returns {Date} - Đối tượng Date của ngày sản xuất hiện tại.
 */
function getBusinessDate() {
  const now = new Date();
  const businessHourStart = 5; // 5 giờ
  const businessMinuteStart = 40; // 40 phút

  // Nếu thời gian hiện tại trước 5:40 sáng
  if (
    now.getHours() < businessHourStart ||
    (now.getHours() === businessHourStart &&
      now.getMinutes() < businessMinuteStart)
  ) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // Lùi lại 1 ngày
    return yesterday;
  }
  // Nếu không, trả về ngày hiện tại
  return now;
}

/**
 * Thêm một số tháng vào một ngày cụ thể.
 * Hàm này xử lý trường hợp ngày cuối tháng, ví dụ: 31/01 + 1 tháng = 28/02 (năm thường).
 * @param {Date} date - Ngày bắt đầu.
 * @param {number} months - Số tháng cần thêm.
 * @returns {Date} - Ngày mới sau khi đã thêm tháng.
 */
function addMonths(date, months) {
  const d = new Date(date);
  const day = d.getDate();
  d.setMonth(d.getMonth() + months);
  // Nếu ngày bị thay đổi (ví dụ: từ 31 thành 1), quay lại ngày cuối cùng của tháng trước.
  if (d.getDate() !== day) {
    d.setDate(0);
  }
  return d;
}

/**
 * Định dạng đối tượng Date thành chuỗi "DD.MM.YYYY".
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày tháng đã định dạng.
 */
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

/**
 * Định dạng đối tượng Date thành chuỗi "DD/MM/YYYY".
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày tháng đã định dạng.
 */
function formatDateWithSlashes(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Định dạng đối tượng Date thành chuỗi "DD/MM/YY" (năm 2 chữ số).
 * @param {Date} date - Đối tượng Date cần định dạng.
 * @returns {string} - Chuỗi ngày tháng đã định dạng.
 */
function formatDateShortYear(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

/**
 * Định dạng ngày hết hạn cho bao bì stick theo yêu cầu: "DD MM YY SuffixDD_prod".
 * @param {Date} expiryDate - Ngày hết hạn.
 * @param {Date} productionDate - Ngày sản xuất.
 * @param {string} suffix - Ký tự hậu tố của sản phẩm (ví dụ: 'L').
 * @returns {string} - Chuỗi ngày hết hạn đã định dạng cho stick.
 */
function formatCustomExpiry(expiryDate, productionDate, suffix) {
  const day = String(expiryDate.getDate()).padStart(2, "0");
  const month = String(expiryDate.getMonth() + 1).padStart(2, "0");
  const year = String(expiryDate.getFullYear()).slice(-2);
  const prodDay = String(productionDate.getDate()).padStart(2, "0");
  return `${day} ${month} ${year} ${suffix}${prodDay}`;
}

/**
 * Tính ngày Julian (ngày thứ mấy trong năm).
 * @param {Date} date - Ngày cần tính.
 * @returns {number} - Ngày Julian (từ 1 đến 366).
 */
function getJulianDay(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Tạo chuỗi Batch Code theo định dạng: YJJJFS (Y: năm, JJJ: ngày Julian, F: mã nhà máy, S: hậu tố).
 * @param {Date} date - Ngày sản xuất.
 * @param {string} suffix - Ký tự cuối của batch code.
 * @returns {string} - Chuỗi Batch Code hoàn chỉnh.
 */
function formatBatchCode(date, suffix) {
  const year = String(date.getFullYear()).slice(-1);
  const julianDay = String(getJulianDay(date)).padStart(3, "0");
  const factoryCode = "2131"; // Mã nhà máy cố định
  return `${year}${julianDay}${factoryCode}${suffix}`;
}

// =================================================================================
// KHU VỰC TÍNH TOÁN NGƯỢC (REVERSE CALCULATION)
// =================================================================================

/**
 * Chuyển đổi từ ngày Julian và năm sang đối tượng Date.
 * @param {number} year - Năm (đầy đủ 4 chữ số).
 * @param {number} julianDay - Ngày Julian (1-366).
 * @returns {Date} - Đối tượng Date tương ứng.
 */
function julianToDate(year, julianDay) {
  const date = new Date(year, 0, 1); // Bắt đầu từ ngày 1 tháng 1
  date.setDate(julianDay); // Thêm số ngày Julian
  return date;
}

/**
 * Trừ một số tháng từ một ngày cụ thể.
 * @param {Date} date - Ngày bắt đầu.
 * @param {number} months - Số tháng cần trừ.
 * @returns {Date} - Ngày mới sau khi đã trừ.
 */
function subtractMonths(date, months) {
  const d = new Date(date);
  d.setMonth(d.getMonth() - months);
  return d;
}

/**
 * Phân tích chuỗi ngày "DD.MM.YYYY" thành đối tượng Date.
 * @param {string} dateString - Chuỗi ngày.
 * @returns {Date|null} - Đối tượng Date hoặc null nếu chuỗi không hợp lệ.
 */
function parseDateString(dateString) {
  const parts = dateString.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!parts) return null;
  // parts[2] - 1 vì tháng trong JS bắt đầu từ 0
  const date = new Date(parts[3], parts[2] - 1, parts[1]);
  // Kiểm tra xem ngày có hợp lệ không (ví dụ: 30.02.2024)
  if (
    date.getFullYear() == parts[3] &&
    date.getMonth() == parts[2] - 1 &&
    date.getDate() == parts[1]
  ) {
    return date;
  }
  return null;
}

// =================================================================================
// KHU VỰC CẬP NHẬT GIAO DIỆN (UI UPDATE FUNCTIONS)
// =================================================================================

/**
 * Cập nhật đồng hồ, ngày Julian và batch code ví dụ trên dashboard.
 * Chạy mỗi giây.
 */
function updateDateTime() {
  const now = new Date(); // Giữ lại `new Date()` để hiển thị đồng hồ thời gian thực
  const businessDate = getBusinessDate(); // Sử dụng ngày sản xuất cho tính toán
  const julianDay = getJulianDay(businessDate);
  const formattedDate = formatDateWithSlashes(now);
  const formattedTime = now.toTimeString().split(" ")[0];

  // Cập nhật ngày giờ hiện tại
  document.getElementById("currentDateTime").textContent =
    `${formattedDate} ${formattedTime}`;
  // Cập nhật ngày Julian theo ngày sản xuất
  document.getElementById("julianDaily").textContent = String(
    julianDay,
  ).padStart(3, "0");
  // Cập nhật batch code ví dụ theo ngày sản xuất
  document.getElementById("currentBatchCode").textContent = formatBatchCode(
    businessDate,
    "",
  );
}

/**
 * Tính toán và hiển thị tất cả các mã lô và ngày hết hạn cho các sản phẩm.
 * Hàm này sẽ được gọi khi trang tải và vào lúc 5:40 sáng.
 */
function calculateAndDisplayAll() {
  const businessDate = getBusinessDate(); // Sử dụng ngày sản xuất cho tất cả tính toán

  // Cập nhật bảng HSD nhanh
  const shelfLives = [9, 10, 12, 15, 18, 24];
  shelfLives.forEach((sl) => {
    const expiryDate = addMonths(businessDate, sl);
    const element = document.getElementById(`expiry-${sl}`);
    if (element) {
      element.textContent = formatDate(expiryDate);
    }
  });

  // Lặp qua mảng sản phẩm và cập nhật thông tin cho từng dòng
  products.forEach((product) => {
    const expiryDate = addMonths(businessDate, product.shelfLife);
    const batchCode = formatBatchCode(businessDate, product.batchSuffix);

    // Cập nhật Batch Code
    const batchEl = document.getElementById(product.batchId);
    if (batchEl) batchEl.textContent = batchCode;

    // Cập nhật HSD Stick
    const expiryEl = document.getElementById(product.expiryId);
    if (expiryEl) {
      // Áp dụng định dạng đặc biệt cho Stick của nhóm PSC
      if (product.area === "Filling" && product.group === "PSC") {
        const stickFormat = `${formatDateWithSlashes(
          expiryDate,
        )}<br>${batchCode}`;
        expiryEl.innerHTML = stickFormat; // Dùng innerHTML để thẻ <br> hoạt động
      } else {
        expiryEl.textContent = formatCustomExpiry(
          expiryDate,
          businessDate,
          product.batchSuffix,
        );
      }
    }

    // Chỉ cập nhật Bag và Carton cho khu vực Packing
    if (product.area === "Packing") {
      // Cập nhật HSD Bag (tùy nhóm sản phẩm)
      let bagFormat;
      if (product.group === "PSC") {
        const time = businessDate.toTimeString().substring(0, 5); // Lấy HH:MM
        bagFormat = `${formatDateWithSlashes(
          expiryDate,
        )}<br>${time} ${batchCode}`;
      } else if (product.group === "2IN1" || product.group === "3IN1") {
        bagFormat = `${formatDate(expiryDate)}<br>${batchCode}`;
      } else {
        // Giữ lại định dạng cũ cho các nhóm khác như MILO
        bagFormat = formatDate(expiryDate);
      }

      const bagEl = document.getElementById(product.expiryBagId);
      if (bagEl) bagEl.innerHTML = bagFormat; // Dùng innerHTML để thẻ <br> hoạt động

      // Cập nhật HSD Carton (tùy nhóm sản phẩm)
      let cartonFormat;
      const time = businessDate.toTimeString().substring(0, 5); // Lấy HH:MM

      if (product.group === "PSC") {
        // Định dạng mới cho PSC: Batchcode DD/MM/YYYY HH:MM
        cartonFormat = `${batchCode} ${formatDateWithSlashes(
          expiryDate,
        )} ${time}`;
      } else {
        // Giữ định dạng cũ cho các nhóm khác (2IN1, 3IN1)
        cartonFormat = `${batchCode} HSD ${formatDateShortYear(expiryDate)}`;
      }

      const cartonEl = document.getElementById(product.expiryCartonId);
      if (cartonEl) cartonEl.textContent = cartonFormat;
    }
  });
}

/**
 * Thiết lập bộ đếm thời gian để tự động cập nhật dữ liệu vào lúc 5:40 sáng.
 */
function scheduleDailyUpdate() {
  const now = new Date();
  const nextRun = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    5,
    40,
    0,
    0,
  );

  // Nếu 5:40 sáng hôm nay đã qua, lên lịch cho ngày mai
  if (now.getTime() > nextRun.getTime()) {
    nextRun.setDate(nextRun.getDate() + 1);
  }

  const msUntilNextRun = nextRun.getTime() - now.getTime();

  setTimeout(() => {
    calculateAndDisplayAll(); // Chạy lần đầu vào 5:40 sáng
    setInterval(calculateAndDisplayAll, 24 * 60 * 60 * 1000); // Lặp lại mỗi 24 giờ
  }, msUntilNextRun);
}

// =================================================================================
// KHU VỰC XỬ LÝ SỰ KIỆN (EVENT HANDLERS)
// =================================================================================

// Chạy khi toàn bộ DOM đã được tải
document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo các hàm cập nhật giao diện
  updateDateTime();
  setInterval(updateDateTime, 1000); // Cập nhật đồng hồ mỗi giây
  calculateAndDisplayAll(); // Tính toán và hiển thị dữ liệu lần đầu
  scheduleDailyUpdate(); // Lên lịch cập nhật hàng ngày

  // Gán sự kiện cho các nút trong khu vực tính toán
  const calcFromBatchBtn = document.getElementById("calcFromBatchBtn");
  const calcFromExpiryBtn = document.getElementById("calcFromExpiryBtn");

  if (calcFromBatchBtn) {
    calcFromBatchBtn.addEventListener("click", handleCalcFromBatch);
  }
  if (calcFromExpiryBtn) {
    calcFromExpiryBtn.addEventListener("click", handleCalcFromExpiry);
  }

  // Khởi tạo các dropdown cho khu vực Validator
  populateAreaSelector();
  populateGroupSelector();
  populateProductSelector();

  // Thêm event listener cho các dropdown của validator
  const areaSelect = document.getElementById("areaSelect");
  const groupSelect = document.getElementById("groupSelect");
  const productSelect = document.getElementById("productSelect");
  const startCameraBtn = document.getElementById("startCameraBtn");
  const uploadBtn = document.getElementById("uploadBtn");

  // Hàm kiểm tra và bật/tắt các nút hành động (Camera và Upload)
  function toggleActionButtons() {
    const allSelected =
      areaSelect.value && groupSelect.value && productSelect.value;
    if (allSelected) {
      startCameraBtn.disabled = false;
      uploadBtn.classList.remove("btn-disabled");
    } else {
      startCameraBtn.disabled = true;
      uploadBtn.classList.add("btn-disabled");
    }
  }

  // Khởi tạo trạng thái ban đầu
  toggleActionButtons();

  if (areaSelect) {
    areaSelect.addEventListener("change", (event) => {
      populateGroupSelector(event.target.value);
      populateProductSelector();
      toggleActionButtons();
    });
  }

  if (groupSelect) {
    groupSelect.addEventListener("change", (event) => {
      populateProductSelector(areaSelect.value, event.target.value);
      toggleActionButtons();
    });
  }
  if (productSelect) {
    productSelect.addEventListener("change", toggleActionButtons);
  }

  // Xử lý sự kiện cho tính năng Validate bằng Camera và Upload
  const stopCameraBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");
  const uploadInput = document.getElementById("uploadInput");

  if (startCameraBtn) {
    startCameraBtn.addEventListener("click", startCamera);
  }
  if (stopCameraBtn) {
    stopCameraBtn.addEventListener("click", stopCamera);
  }
  if (captureBtn) {
    captureBtn.addEventListener("click", captureAndValidate);
  }
  if (uploadInput) {
    uploadInput.addEventListener("change", handleImageUpload);
  }
});

// =================================================================================
// KHU VỰC XỬ LÝ CAMERA
// =================================================================================

/**
 * Bắt đầu luồng video từ camera và hiển thị nó.
 */
function startCamera() {
  const video = document.getElementById("videoElement");
  const cameraContainer = document.getElementById("cameraContainer");
  const startCameraBtn = document.getElementById("startCameraBtn");
  const stopCameraBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");
  const uploadBtn = document.getElementById("uploadBtn");

  // Hiển thị giao diện camera
  cameraContainer.style.display = "block";
  startCameraBtn.style.display = "none";
  stopCameraBtn.style.display = "inline-block";
  captureBtn.style.display = "inline-block";

  // Vô hiệu hóa nút Upload khi camera đang chạy
  uploadBtn.classList.add("btn-disabled");

  // Truy cập camera
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error("Error accessing camera: ", err);
      alert("Could not access the camera. Please check permissions.");
      stopCamera(); // Reset UI nếu camera lỗi
    });
}

/**
 * Dừng luồng video từ camera và ẩn giao diện.
 */
function stopCamera() {
  const video = document.getElementById("videoElement");
  const cameraContainer = document.getElementById("cameraContainer");
  const startCameraBtn = document.getElementById("startCameraBtn");
  const stopCameraBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");
  const uploadBtn = document.getElementById("uploadBtn");

  // Dừng stream video
  if (video.srcObject) {
    video.srcObject.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  }

  // Reset giao diện
  cameraContainer.style.display = "none";
  startCameraBtn.style.display = "inline-block";
  stopCameraBtn.style.display = "none";
  captureBtn.style.display = "none";

  // Kích hoạt lại nút Upload (nếu các dropdown đã được chọn)
  const allSelected =
    document.getElementById("areaSelect").value &&
    document.getElementById("groupSelect").value &&
    document.getElementById("productSelect").value;
  if (allSelected) {
    uploadBtn.classList.remove("btn-disabled");
  }
}

// =================================================================================
// KHU VỰC XỬ LÝ UPLOAD VÀ CHỤP ẢNH
// =================================================================================

/**
 * HÀM RIÊNG CHO NÚT UPLOAD: Xử lý khi người dùng chọn file ảnh.
 * @param {Event} event - Sự kiện 'change' từ input file.
 */
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  // Vô hiệu hóa nút camera khi bắt đầu upload
  const startCameraBtn = document.getElementById("startCameraBtn");
  if (startCameraBtn) {
    startCameraBtn.disabled = true;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imageBase64 = e.target.result;

    // --- BƯỚC 1: CẬP NHẬT GIAO DIỆN NGAY LẬP TỨC ---
    // Di chuyển các lệnh cập nhật UI ra khỏi processImageForValidation và đặt vào đây.
    const resultContainer = document.getElementById("resultContainer");
    const capturedImageDisplay = document.getElementById(
      "capturedImageDisplay",
    );
    const statusBadge = document.getElementById("statusBadge");
    const spinner = document.getElementById("spinner");

    resultContainer.style.display = "block";
    capturedImageDisplay.src = imageBase64;
    statusBadge.className = "alert alert-warning text-center font-weight-bold";
    statusBadge.innerHTML =
      '<i class="fas fa-cog fa-spin"></i> Analyzing with AI...';
    spinner.style.display = "block";
    document.getElementById("expectedTextInput").value = "";
    document.getElementById("detectedTextInput").value = "";
    document.getElementById("errorMessage").style.display = "none";

    // --- BƯỚC 2: GỌI HÀM XỬ LÝ LOGIC SAU MỘT KHOẢNG TRỄ NHỎ ---
    // Điều này cho phép trình duyệt di động có thời gian để "vẽ" lại giao diện ở Bước 1.
    setTimeout(() => {
      processImageForValidation(imageBase64).finally(() => {
        // Kích hoạt lại nút camera sau khi xử lý xong
        if (startCameraBtn) {
          startCameraBtn.disabled = false;
        }
      });
    }, 50); // 50ms là một khoảng trễ an toàn và không thể nhận thấy.
  };
  reader.readAsDataURL(file);

  // Reset input để có thể upload lại cùng một file
  event.target.value = null;
}

/**
 * HÀM RIÊNG CHO NÚT CHỤP ẢNH: Chụp ảnh từ video, cắt và xử lý.
 */
async function captureAndValidate() {
  const video = document.getElementById("videoElement");
  const viewfinder = document.getElementById("viewfinder");

  if (!video.srcObject || video.paused || video.ended) {
    console.error("Camera is not active.");
    alert("Camera is not active. Please start the camera first.");
    return;
  }

  // --- Logic chụp và cắt ảnh từ video ---
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;
  const box = viewfinder.getBoundingClientRect();
  const videoBox = video.getBoundingClientRect();

  const scaleX = videoWidth / videoBox.width;
  const scaleY = videoHeight / videoBox.height;

  const cropX = (box.left - videoBox.left) * scaleX;
  const cropY = (box.top - videoBox.top) * scaleY;
  const cropWidth = box.width * scaleX;
  const cropHeight = box.height * scaleY;

  canvas.width = cropWidth;
  canvas.height = cropHeight;

  context.drawImage(
    video,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    cropWidth,
    cropHeight,
  );

  const imageBase64 = canvas.toDataURL("image/png");

  // Gọi hàm xử lý chung
  await processImageForValidation(imageBase64);
}

/**
 * HÀM XỬ LÝ CHUNG: Nhận ảnh, gọi API và hiển thị kết quả.
 * @param {string} imageBase64 - Dữ liệu ảnh dưới dạng base64.
 */
async function processImageForValidation(imageBase64) {
  // Lấy các phần tử UI một lần nữa vì hàm này giờ được gọi từ cả hai luồng
  const spinner = document.getElementById("spinner");
  const resultContainer = document.getElementById("resultContainer");
  const capturedImageDisplay = document.getElementById("capturedImageDisplay");
  const statusBadge = document.getElementById("statusBadge");
  const detectedTextInput = document.getElementById("detectedTextInput");
  const expectedTextInput = document.getElementById("expectedTextInput");
  const errorMessage = document.getElementById("errorMessage");

  // Cập nhật giao diện ban đầu (quan trọng cho luồng chụp ảnh)
  resultContainer.style.display = "block";
  capturedImageDisplay.src = imageBase64;
  statusBadge.className = "alert alert-warning text-center font-weight-bold";
  statusBadge.innerHTML =
    '<i class="fas fa-cog fa-spin"></i> Analyzing with AI...';
  spinner.style.display = "block";
  errorMessage.style.display = "none";
  detectedTextInput.value = "";
  expectedTextInput.value = "";

  // Phần logic xử lý không thay đổi
  try {
    // --- LẤY CHUỖI KÝ TỰ CHUẨN VÀ KỊCH BẢN ---
    const productSelect = document.getElementById("productSelect");
    const codeTypeSelect = document.getElementById("codeTypeSelect");
    const product = products.find((p) => p.batchId === productSelect.value);
    const selectedCodeType = codeTypeSelect.value;

    if (!product) {
      validateOcrResult({ success: false, error: "Product not selected." });
      return;
    }

    const lineName = product.productionLine.toUpperCase();
    let scenario = "solid";
    if (lineName.includes("SANKO")) {
      scenario = "dot";
    }

    const expectedElementId =
      selectedCodeType === "stick"
        ? "expiryId"
        : selectedCodeType === "bag"
          ? "expiryBagId"
          : "expiryCartonId";

    const expectedElement = document.getElementById(product[expectedElementId]);
    if (!expectedElement) {
      const errorMsg = `Configuration Error: Element ID '${product[expectedElementId]}' not found.`;
      validateOcrResult({ success: false, error: errorMsg });
      return;
    }

    const expectedTextHTML = expectedElement.innerHTML;
    const expectedText = expectedTextHTML.replace(/<br\s*\/?>/gi, " ").trim();
    expectedTextInput.value = expectedText;

    // --- GỌI API BACKEND VÀ NHẬN KẾT QUẢ ---
    const result = await callValidationApi(imageBase64, expectedText, scenario);
    validateOcrResult(result);
  } catch (error) {
    validateOcrResult({
      success: false,
      error: error.message,
      foundText: "API Call Failed",
      expectedText: expectedTextInput.value, // Lấy giá trị đã được điền
    });
  } finally {
    // Luôn ẩn spinner sau khi hoàn tất
    spinner.style.display = "none";
  }
}

/**
 * [HÀM MẪU] Gửi dữ liệu ảnh và thông tin đến backend để xử lý.
 * BẠN CẦN THAY THẾ NỘI DUNG HÀM NÀY BẰNG LOGIC GỌI API THỰC TẾ.
 * @param {string} imageBase64 - Dữ liệu ảnh base64.
 * @param {string} expectedText - Chuỗi ký tự mong đợi.
 * @param {string} scenario - Kịch bản OCR ('dot', 'solid', 'laser').
 * @returns {Promise<object>} - Promise chứa kết quả từ backend.
 */
async function callValidationApi(imageBase64, expectedText, scenario) {
  console.log("Calling validation API with:", { expectedText, scenario });

  // **BẠN CẦN THAY THẾ URL DƯỚI ĐÂY BẰNG ENDPOINT API THỰC TẾ CỦA BẠN**
  const API_ENDPOINT =
    "https://alexia-unvitriolized-unhideously.ngrok-free.dev/api/validate-code";

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Thêm các header khác nếu cần, ví dụ: Authorization
        // 'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        image: imageBase64, // Ảnh dưới dạng base64
        expectedText: expectedText, // SỬA "expected" THÀNH "expectedText"
        scenario: scenario, // Kịch bản OCR ('dot', 'solid', 'laser')
      }),
    });

    if (!response.ok) {
      // Xử lý các lỗi từ phía server (ví dụ: 400, 500)
      const errorData = await response.json().catch(() => ({})); // Cố gắng đọc lỗi từ body
      const errorMessage =
        errorData.message ||
        `API request failed with status ${response.status}`;
      throw new Error(errorMessage);
    }

    // Trả về dữ liệu JSON từ API
    return await response.json();
  } catch (error) {
    // Xử lý các lỗi mạng (ví dụ: không kết nối được server)
    console.error("API Call Error:", error);
    // Ném lỗi để hàm processImageForValidation có thể bắt và hiển thị
    throw new Error(`Network or API error: ${error.message}`);
  }
}

/**
 * Hiển thị kết quả PASSED/FAILED trả về từ backend vào khu vực kết quả mới.
 * @param {object} result - Đối tượng kết quả từ API OCR.
 */
function validateOcrResult(result) {
  const statusBadge = document.getElementById("statusBadge");
  const detectedTextInput = document.getElementById("detectedTextInput");
  const errorMessage = document.getElementById("errorMessage");
  const expectedTextInput = document.getElementById("expectedTextInput"); // Lấy thêm ô input expected

  // Điền text mà AI đọc được vào ô input
  detectedTextInput.value = result.foundText || "";
  errorMessage.style.display = "none"; // Ẩn lỗi cũ

  // --- THÊM BƯỚC CHUẨN HÓA CHUỖI ---
  const normalizedExpected = normalizeString(expectedTextInput.value);
  const normalizedFound = normalizeString(result.foundText);
  const isMatch = normalizedExpected === normalizedFound;
  // --- KẾT THÚC BƯỚC CHUẨN HÓA ---

  // Sử dụng kết quả so sánh 'isMatch' thay vì 'result.success'
  if (isMatch) {
    statusBadge.className = "analysis-status-badge badge-success";
    statusBadge.innerHTML =
      '<h1><i class="fas fa-check-circle"></i> PASSED</h1>';

    detectedTextInput.classList.add("is-valid");
    detectedTextInput.classList.remove("is-invalid");
    errorMessage.style.display = "none";

    // THÊM HIỆU ỨNG NHẤP NHÁY KHI THÀNH CÔNG
    const viewfinder = document.getElementById("viewfinder");
    if (viewfinder) {
      viewfinder.classList.add("success-flash");
      // Xóa class sau khi animation kết thúc để có thể nhấp nháy lại lần sau
      setTimeout(() => {
        viewfinder.classList.remove("success-flash");
      }, 600); // 600ms khớp với thời gian của animation
    }
  } else {
    statusBadge.className = "analysis-status-badge badge-danger";
    statusBadge.innerHTML =
      '<h1><i class="fas fa-times-circle"></i> FAILED</h1>';

    detectedTextInput.classList.add("is-invalid");
    detectedTextInput.classList.remove("is-valid");

    // Hiển thị lỗi từ API nếu có, nếu không thì báo lỗi không khớp
    const reason = result.error
      ? result.error
      : "Detected code does not match expected code.";
    errorMessage.textContent = `Reason: ${reason}`;
    errorMessage.style.display = "block";
  }
}

/**
 * Đổ dữ liệu các khu vực (duy nhất) vào dropdown.
 */
function populateAreaSelector() {
  const areaSelect = document.getElementById("areaSelect");
  if (!areaSelect) return;

  const areas = [...new Set(products.map((p) => p.area))];
  areaSelect.innerHTML = '<option value="">-- Select Area --</option>';
  areas.forEach((area) => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    areaSelect.appendChild(option);
  });
}

/**
 * Đổ dữ liệu các nhóm sản phẩm (duy nhất) vào dropdown dựa trên khu vực đã chọn.
 * @param {string} selectedArea - Khu vực được người dùng chọn.
 */
function populateGroupSelector(selectedArea) {
  const groupSelect = document.getElementById("groupSelect");
  if (!groupSelect) return;

  groupSelect.innerHTML = '<option value="">-- Select Group --</option>';
  groupSelect.disabled = true;

  if (!selectedArea) return;

  // Lấy danh sách các nhóm duy nhất từ khu vực đã chọn
  const groups = [
    ...new Set(
      products.filter((p) => p.area === selectedArea).map((p) => p.group),
    ),
  ];

  groups.forEach((group) => {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    groupSelect.appendChild(option);
  });
  groupSelect.disabled = false;
}

/**
 * Đổ dữ liệu các dây chuyền sản xuất vào dropdown dựa trên nhóm đã chọn.
 * @param {string} selectedArea - Khu vực được người dùng chọn.
 * @param {string} selectedGroup - Nhóm sản phẩm được người dùng chọn.
 */
function populateProductSelector(selectedArea, selectedGroup) {
  const productSelect = document.getElementById("productSelect");
  const startCameraBtn = document.getElementById("startCameraBtn");
  if (!productSelect) return;

  productSelect.innerHTML = '<option value="">-- Select Line --</option>';
  productSelect.disabled = true;
  if (startCameraBtn) startCameraBtn.disabled = true;

  if (!selectedArea || !selectedGroup) {
    return;
  }

  // Lọc các sản phẩm thuộc khu vực và nhóm đã chọn
  const filteredProducts = products.filter(
    (p) => p.area === selectedArea && p.group === selectedGroup,
  );

  filteredProducts.forEach((product) => {
    const option = document.createElement("option");
    // Sử dụng batchId làm value vì nó là duy nhất
    option.value = product.batchId;
    option.textContent = `${product.productionLine} (${product.shelfLife}m)`;
    productSelect.appendChild(option);
  });

  productSelect.disabled = false;
}

/**
 * Xử lý sự kiện khi nhấn nút "Calculate" từ Batch Code.
 */
function handleCalcFromBatch() {
  const batchInput = document
    .getElementById("batchInput")
    .value.trim()
    .toUpperCase();
  const resultDiv = document.getElementById("calcResult");

  if (batchInput.length < 9) {
    resultDiv.innerHTML =
      "<strong>Error:</strong> Batch Code must be at least 9 characters long.";
    resultDiv.className = "alert alert-danger mt-4";
    resultDiv.style.display = "block";
    return;
  }

  const yearDigit = parseInt(batchInput.charAt(0), 10);
  const julianDay = parseInt(batchInput.substring(1, 4), 10);
  const suffix = batchInput.slice(-1);

  const currentYear = new Date().getFullYear();
  const currentCentury = Math.floor(currentYear / 100) * 100;
  const productionYear =
    currentCentury +
    (currentYear % 100) -
    (currentYear % 10 < yearDigit ? 10 : 0) +
    yearDigit;

  const productionDate = julianToDate(productionYear, julianDay);

  if (isNaN(productionDate.getTime())) {
    resultDiv.innerHTML = "<strong>Error:</strong> Invalid Batch Code format.";
    resultDiv.className = "alert alert-danger mt-4";
    resultDiv.style.display = "block";
    return;
  }

  const product = products.find((p) => p.batchSuffix === suffix);
  const shelfLife = product ? product.shelfLife : "Unknown";
  const line = product ? product.productionLine : "Unknown";

  resultDiv.innerHTML = `
    <strong>Production Date:</strong> ${formatDate(productionDate)}<br>
    <strong>Associated Line/Suffix:</strong> ${line} (Suffix: ${suffix})<br>
    <strong>Shelf Life:</strong> ${shelfLife} months
  `;
  resultDiv.className = "alert alert-success mt-4";
  resultDiv.style.display = "block";
}

/**
 * Xử lý sự kiện khi nhấn nút "Calculate" từ Expiration Date.
 */
function handleCalcFromExpiry() {
  const expiryInput = document.getElementById("expiryInput").value.trim();
  const shelfLife = parseInt(
    document.getElementById("shelfLifeSelect").value,
    10,
  );
  const resultDiv = document.getElementById("calcResult");

  const expiryDate = parseDateString(expiryInput);

  if (!expiryDate) {
    resultDiv.innerHTML =
      "<strong>Error:</strong> Invalid date format. Please use DD.MM.YYYY.";
    resultDiv.className = "alert alert-danger mt-4";
    resultDiv.style.display = "block";
    return;
  }

  const productionDate = subtractMonths(expiryDate, shelfLife);

  resultDiv.innerHTML = `<strong>Calculated Production Date:</strong> ${formatDate(productionDate)}`;
  resultDiv.className = "alert alert-success mt-4";
  resultDiv.style.display = "block";
}

const UI_ELEMENTS = {
  AREA_SELECT: "areaSelect",
  GROUP_SELECT: "groupSelect",
  PRODUCT_SELECT: "productSelect",
  START_CAMERA_BTN: "startCameraBtn",
  STOP_CAMERA_BTN: "stopCameraBtn",
  CAPTURE_BTN: "captureBtn",
  UPLOAD_BTN: "uploadBtn",
  BATCH_INPUT: "batchInput",
  EXPIRY_INPUT: "expiryInput",
  SHELF_LIFE_SELECT: "shelfLifeSelect",
};

// sử dụng: document.getElementById(UI_ELEMENTS.AREA_SELECT)
