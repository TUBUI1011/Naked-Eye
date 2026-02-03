document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Ngăn form gửi đi theo cách truyền thống

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Theo yêu cầu, chỉ cần người dùng nhập bất kỳ thông tin gì
      if (email && password) {
        // Đánh dấu rằng người dùng đã đăng nhập
        // sessionStorage sẽ bị xóa khi người dùng đóng tab/trình duyệt
        sessionStorage.setItem("isLoggedIn", "true");

        // Chuyển hướng đến trang chính
        window.location.href = "index.html";
      } else {
        loginError.textContent = "Please enter both email and password.";
      }
    });
  }
});
