// Basic UI interactions and mock navigation
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      document.querySelector(".sidebar").classList.toggle("show");
    });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");

    if (
      sidebar &&
      sidebar.classList.contains("show") &&
      !sidebar.contains(event.target) &&
      sidebarToggle !== event.target &&
      !sidebarToggle.contains(event.target)
    ) {
      sidebar.classList.remove("show");
    }
  });

  // Bootstrap validation
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Mock route after valid submit (no backend yet)
          if (form.id === "loginForm") {
            event.preventDefault();
            const role = document.getElementById("role")?.value;
            if (role === "admin") window.location.href = "admin/dashboard.html";
            else if (role === "pakar")
              window.location.href = "pakar/dashboard.html";
            else window.location.href = "user/dashboard.html";
          }
          if (form.id === "registerForm") {
            event.preventDefault();
            window.location.href = "login.html";
          }
          if (form.id === "biodataForm") {
            event.preventDefault();
            alert("Biodata tersimpan (demo).");
          }
          if (form.id === "konsultasiForm") {
            event.preventDefault();
            window.location.href = "hasil-konsultasi.html";
          }
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  // Toggle password
  const togglePass = document.getElementById("togglePass");
  if (togglePass) {
    togglePass.addEventListener("click", () => {
      const input = document.getElementById("password");
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      togglePass.querySelector("i").classList.toggle("bi-eye");
      togglePass.querySelector("i").classList.toggle("bi-eye-slash");
    });
  }
})();
