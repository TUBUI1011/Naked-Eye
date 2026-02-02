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
  const now = new Date();
  const julianDay = getJulianDay(now);
  const formattedDate = formatDateWithSlashes(now);
  const formattedTime = now.toTimeString().split(" ")[0];

  // Cập nhật ngày giờ hiện tại
  document.getElementById("currentDateTime").textContent =
    `${formattedDate} ${formattedTime}`;
  // Cập nhật ngày Julian
  document.getElementById("julianDaily").textContent = String(
    julianDay,
  ).padStart(3, "0");
  // Cập nhật batch code ví dụ (không có hậu tố)
  document.getElementById("currentBatchCode").textContent = formatBatchCode(
    now,
    "",
  );
}

/**
 * Tính toán và hiển thị tất cả các mã lô và ngày hết hạn cho các sản phẩm.
 * Hàm này sẽ được gọi khi trang tải và vào lúc nửa đêm.
 */
function calculateAndDisplayAll() {
  const today = new Date();

  // Cập nhật bảng HSD nhanh
  const shelfLives = [9, 10, 12, 15, 18, 24];
  shelfLives.forEach((sl) => {
    const expiryDate = addMonths(today, sl);
    const element = document.getElementById(`expiry-${sl}`);
    if (element) {
      element.textContent = formatDate(expiryDate);
    }
  });

  // Lặp qua mảng sản phẩm và cập nhật thông tin cho từng dòng
  products.forEach((product) => {
    const expiryDate = addMonths(today, product.shelfLife);
    const batchCode = formatBatchCode(today, product.batchSuffix);

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
          today,
          product.batchSuffix,
        );
      }
    }

    // Chỉ cập nhật Bag và Carton cho khu vực Packing
    if (product.area === "Packing") {
      // Cập nhật HSD Bag (tùy nhóm sản phẩm)
      let bagFormat;
      if (product.group === "PSC") {
        const time = today.toTimeString().substring(0, 5); // Lấy HH:MM
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
      const time = today.toTimeString().substring(0, 5); // Lấy HH:MM

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
 * Thiết lập bộ đếm thời gian để tự động cập nhật dữ liệu vào lúc nửa đêm.
 */
function scheduleDailyUpdate() {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  );
  const msUntilMidnight = tomorrow - now;

  setTimeout(() => {
    calculateAndDisplayAll(); // Chạy lần đầu vào nửa đêm
    setInterval(calculateAndDisplayAll, 24 * 60 * 60 * 1000); // Lặp lại mỗi 24 giờ
  }, msUntilMidnight);
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
  populateGroupSelector(); // Chạy lần đầu để hiển thị dropdown group bị vô hiệu hóa
  populateProductSelector(); // Chạy lần đầu để hiển thị dropdown line bị vô hiệu hóa

  // Thêm event listener cho các dropdown của validator
  const areaSelect = document.getElementById("areaSelect");
  const groupSelect = document.getElementById("groupSelect");
  const productSelect = document.getElementById("productSelect");
  const startCameraBtn = document.getElementById("startCameraBtn");

  // Hàm kiểm tra và bật/tắt nút "Start Camera"
  function toggleCameraButton() {
    if (areaSelect.value && groupSelect.value && productSelect.value) {
      startCameraBtn.disabled = false;
    } else {
      startCameraBtn.disabled = true;
    }
  }

  if (areaSelect) {
    areaSelect.addEventListener("change", (event) => {
      populateGroupSelector(event.target.value);
      populateProductSelector(); // Reset product selector
      toggleCameraButton();
    });
  }

  if (groupSelect) {
    groupSelect.addEventListener("change", (event) => {
      populateProductSelector(areaSelect.value, event.target.value);
      toggleCameraButton();
    });
  }
  if (productSelect) {
    productSelect.addEventListener("change", toggleCameraButton);
  }

  // Xử lý sự kiện cho tính năng Validate bằng Camera
  const stopCameraBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");

  if (startCameraBtn) {
    startCameraBtn.addEventListener("click", startCamera);
  }
  if (stopCameraBtn) {
    stopCameraBtn.addEventListener("click", stopCamera);
  }
  if (captureBtn) {
    captureBtn.addEventListener("click", captureAndValidate);
  }
});

/**
 * Xử lý sự kiện khi người dùng nhấn nút "Calculate" từ Batch Code.
 */
function handleCalcFromBatch() {
  const batchInput = document.getElementById("batchInput").value.trim();
  const resultDiv = document.getElementById("calcResult");

  // Regex để trích xuất năm (1 chữ số) và ngày Julian (3 chữ số)
  const match = batchInput.match(/^(\d)(\d{3})/);

  if (match) {
    const yearDigit = parseInt(match[1], 10);
    const julianDay = parseInt(match[2], 10);

    // Xác định thế kỷ (giả định năm 202x)
    const currentYear = new Date().getFullYear();
    const currentCentury = Math.floor(currentYear / 10) * 10;
    const productionYear = currentCentury + yearDigit;

    const productionDate = julianToDate(productionYear, julianDay);
    resultDiv.innerHTML = `<strong>Production Date:</strong> ${formatDateWithSlashes(
      productionDate,
    )}`;
    resultDiv.className = "alert alert-success mt-4";
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML =
      "<strong>Invalid Batch Code format.</strong> Expected format: YJJJ...";
    resultDiv.className = "alert alert-danger mt-4";
    resultDiv.style.display = "block";
  }
}

/**
 * Xử lý sự kiện khi người dùng nhấn nút "Calculate" từ Hạn sử dụng.
 */
function handleCalcFromExpiry() {
  const expiryInput = document.getElementById("expiryInput").value.trim();
  const shelfLife = parseInt(
    document.getElementById("shelfLifeSelect").value,
    10,
  );
  const resultDiv = document.getElementById("calcResult");

  const expiryDate = parseDateString(expiryInput);

  if (expiryDate) {
    const productionDate = subtractMonths(expiryDate, shelfLife);
    resultDiv.innerHTML = `<strong>Calculated Production Date:</strong> ${formatDateWithSlashes(
      productionDate,
    )}`;
    resultDiv.className = "alert alert-success mt-4";
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML =
      "<strong>Invalid Date format.</strong> Please use DD.MM.YYYY.";
    resultDiv.className = "alert alert-danger mt-4";
    resultDiv.style.display = "block";
  }
}

// =================================================================================
// KHU VỰC VALIDATE BẰNG CAMERA (CAMERA VALIDATION)
// =================================================================================

let videoStream = null; // Biến toàn cục để lưu stream của camera

/**
 * Tăng độ tương phản của ảnh trên canvas.
 * @param {ImageData} imageData - Dữ liệu ảnh từ canvas.
 * @param {number} contrast - Mức độ tương phản (100 là không thay đổi).
 */
function applyContrast(imageData, contrast) {
  const data = imageData.data;
  contrast = contrast / 100 + 1; // convert to factor
  const intercept = 128 * (1 - contrast);
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i] * contrast + intercept;
    data[i + 1] = data[i + 1] * contrast + intercept;
    data[i + 2] = data[i + 2] * contrast + intercept;
  }
}

/**
 * Tìm đường viền lớn nhất trong ảnh đã được nhị phân hóa.
 * Đây là bước cốt lõi để tự động xác định vùng chứa văn bản.
 * @param {ImageData} imageData - Dữ liệu ảnh đã được xử lý.
 * @returns {object|null} - Bounding box { x, y, width, height } của vùng văn bản hoặc null.
 */
function findTextBoundingBox(imageData) {
  const { data, width, height } = imageData;
  const visited = new Uint8Array(width * height);
  let maxArea = 0;
  let bestBox = null;
  // Duyệt qua từng pixel trong ảnh
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = y * width + x;
      // Chỉ bắt đầu tìm kiếm từ pixel đen (văn bản) chưa được duyệt
      if (data[index * 4] === 0 && !visited[index]) {
        const points = [];
        const stack = [[x, y]];
        visited[index] = 1;
        let minX = x,
          maxX = x,
          minY = y,
          maxY = y;
        // Sử dụng thuật toán DFS để tìm tất cả các pixel kết nối
        while (stack.length > 0) {
          const [cx, cy] = stack.pop();
          points.push([cx, cy]);
          minX = Math.min(minX, cx);
          maxX = Math.max(maxX, cx);
          minY = Math.min(minY, cy);
          maxY = Math.max(maxY, cy);

          // Kiểm tra 8 pixel xung quanh
          for (let ny = cy - 1; ny <= cy + 1; ny++) {
            for (let nx = cx - 1; nx <= cx + 1; nx++) {
              if (
                nx >= 0 &&
                nx < width &&
                ny >= 0 &&
                ny < height &&
                !visited[ny * width + nx] &&
                data[(ny * width + nx) * 4] === 0
              ) {
                visited[ny * width + nx] = 1;
                stack.push([nx, ny]);
              }
            }
          }
        }

        const area = (maxX - minX + 1) * (maxY - minY + 1);
        if (area > maxArea) {
          maxArea = area;
          bestBox = {
            x: minX,
            y: minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1,
          };
        }
      }
    }
  }
  return bestBox;
}

/**
 * Khởi động camera và hiển thị video feed.
 */
async function startCamera() {
  const video = document.getElementById("videoElement");
  const cameraFeed = document.getElementById("cameraFeed");
  const startBtn = document.getElementById("startCameraBtn");
  const stopBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");
  const ocrStatus = document.getElementById("ocrStatus");

  // Ẩn nút Start, hiện các nút điều khiển camera
  startBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
  cameraFeed.style.display = "block";
  captureBtn.style.display = "block";

  ocrStatus.textContent = "Starting camera...";

  try {
    // Yêu cầu truy cập camera sau của thiết bị với độ phân giải cao hơn
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment", // Ưu tiên camera sau
        width: { ideal: 1920 }, // Tăng độ phân giải để có ảnh nét hơn
        height: { ideal: 1080 },
      },
    });
    videoStream = stream; // Lưu stream lại để có thể dừng sau này
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      ocrStatus.textContent = "Camera ready. Position the code in the box.";
    };
  } catch (err) {
    console.error("Error accessing camera: ", err);
    ocrStatus.textContent =
      "Error: Could not access camera. Please check permissions.";
    ocrStatus.className = "text-danger";
    stopCamera(); // Gọi hàm stop để reset giao diện
  }
}

/**
 * Dừng camera và reset giao diện về trạng thái ban đầu.
 */
function stopCamera() {
  const video = document.getElementById("videoElement");
  const cameraFeed = document.getElementById("cameraFeed");
  const startBtn = document.getElementById("startCameraBtn");
  const stopBtn = document.getElementById("stopCameraBtn");
  const captureBtn = document.getElementById("captureBtn");
  const ocrStatus = document.getElementById("ocrStatus");
  const validationResult = document.getElementById("validationResult");

  // Dừng tất cả các track trong stream
  if (videoStream) {
    videoStream.getTracks().forEach((track) => track.stop());
    videoStream = null;
  }

  // Reset các thành phần giao diện
  video.srcObject = null;
  startBtn.style.display = "inline-block";
  stopBtn.style.display = "none";
  cameraFeed.style.display = "none";
  captureBtn.style.display = "none";
  ocrStatus.textContent = "";
  validationResult.style.display = "none";
}

// Hàm mới để gọi API backend, gửi cả ảnh, chuỗi mong đợi và kịch bản xử lý
async function callValidationApi(base64Image, expectedText, scenario) {
  try {
    // Thay đổi URL này thành URL của backend khi deploy
    const response = await fetch(
      "https://alexia-unvitriolized-unhideously.ngrok-free.dev/api/validate-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
          expectedText: expectedText,
          scenario: scenario, // Gửi thêm kịch bản xử lý
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Backend API error");
    }

    // Backend sẽ trả về kết quả cuối cùng
    // ví dụ: { success: true, foundText: "...", expectedText: "..." }
    return await response.json();
  } catch (error) {
    console.error("Error calling validation API:", error);
    // Trả về một đối tượng lỗi để FE có thể xử lý
    return {
      success: false,
      error: error.message,
      foundText: "N/A",
      expectedText: expectedText,
    };
  }
}

/**
 * Chụp ảnh, gửi dữ liệu đến backend để xử lý và nhận kết quả cuối cùng.
 */
async function captureAndValidate() {
  const video = document.getElementById("videoElement");
  const viewfinder = document.getElementById("viewfinder");
  const validationResult = document.getElementById("validationResult");
  const spinner = document.getElementById("spinner"); // Biểu tượng loading

  if (!video.srcObject) {
    console.error("Camera is not running.");
    return;
  }

  spinner.style.display = "block";
  validationResult.style.display = "none";

  // --- BƯỚC 1: CHỤP VÀ CẮT ẢNH ---
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

  // --- BƯỚC 2: LẤY CHUỖI KÝ TỰ CHUẨN ---
  const productSelect = document.getElementById("productSelect");
  const codeTypeSelect = document.getElementById("codeTypeSelect");
  const product = products.find((p) => p.batchId === productSelect.value);
  const selectedCodeType = codeTypeSelect.value;

  if (!product) {
    validateOcrResult({ success: false, error: "Product not selected." });
    spinner.style.display = "none";
    return;
  }

  // --- BƯỚC MỚI: XÁC ĐỊNH KỊCH BẢN XỬ LÝ ẢNH ---
  // Tự động xác định kịch bản dựa trên tên máy
  // Ví dụ: SANKO thường dùng in phun (nét chấm), còn lại là in laser/solid
  const lineName = product.productionLine.toUpperCase();
  let scenario = "solid"; // Mặc định là solid
  if (lineName.includes("SANKO")) {
    scenario = "dot";
  }
  // Bạn có thể thêm các điều kiện khác ở đây, ví dụ:
  // else if (lineName.includes("DOMINO")) {
  //   scenario = "laser";
  // }

  const expectedElementId =
    selectedCodeType === "stick"
      ? "expiryId"
      : selectedCodeType === "bag"
        ? "expiryBagId"
        : "expiryCartonId";
  const expectedTextHTML = document.getElementById(
    product[expectedElementId],
  ).innerHTML;
  // Chuyển <br> thành khoảng trắng để có chuỗi hoàn chỉnh
  const expectedText = expectedTextHTML.replace(/<br\s*\/?>/gi, " ");

  // --- BƯỚC 3: GỌI API BACKEND VÀ NHẬN KẾT QUẢ ---
  try {
    // Truyền thêm 'scenario' vào hàm gọi API
    const result = await callValidationApi(imageBase64, expectedText, scenario);
    validateOcrResult(result);
  } catch (error) {
    // Lỗi mạng hoặc lỗi không mong muốn khác
    validateOcrResult({
      success: false,
      error: error.message,
      foundText: "API Call Failed",
      expectedText: expectedText,
    });
  } finally {
    spinner.style.display = "none";
  }
}

/**
 * Hiển thị kết quả PASSED/FAILED trả về từ backend.
 * @param {object} result - Đối tượng kết quả từ backend.
 * @param {boolean} result.success - Trạng thái thành công/thất bại.
 * @param {string} [result.foundText] - Văn bản OCR tìm được.
 * @param {string} [result.expectedText] - Văn bản mong đợi.
 * @param {string} [result.error] - Thông báo lỗi (nếu có).
 */
function validateOcrResult(result) {
  const validationResult = document.getElementById("validationResult");

  if (result.success) {
    validationResult.innerHTML = `<strong><i class="fas fa-check-circle"></i> PASSED</strong><br>Expected: ${result.expectedText}<br>Found: ${result.foundText}`;
    validationResult.className = "alert alert-success mt-3";
  } else {
    let errorMessage = `<strong><i class="fas fa-times-circle"></i> FAILED</strong><br>Expected: ${result.expectedText || "N/A"}<br>Found: ${result.foundText || "Nothing"}`;
    if (result.error) {
      errorMessage += `<br><small>Reason: ${result.error}</small>`;
    }
    validationResult.innerHTML = errorMessage;
    validationResult.className = "alert alert-danger mt-3";
  }
  validationResult.style.display = "block";
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
