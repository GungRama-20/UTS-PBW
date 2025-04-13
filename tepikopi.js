const logoutLink = document.getElementById("logout-link");
    const modal = document.getElementById("confirmModal");
    const confirmExit = document.getElementById("confirmExit");
    const cancelExit = document.getElementById("cancelExit");
  
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault(); // Batalkan navigasi
      modal.style.display = "flex"; // Tampilkan modal
    });
  
    confirmExit.addEventListener("click", () => {
      window.location.href = "login.html"; // Redirect keluar
    });
  
    cancelExit.addEventListener("click", () => {
      modal.style.display = "none"; // Tutup modal
    });
  
    // Optional: Klik luar modal tutup juga
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });