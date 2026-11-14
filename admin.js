function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    // kunci scroll halaman saat drawer kebuka
    document.body.classList.toggle("no-scroll", sidebar.classList.contains("active"));
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    if (!sidebar || !overlay) return;

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
}

// kalau layar dibesarkan lewat 768px, pastikan drawer tertutup
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) closeSidebar();
});

// tutup drawer pakai tombol Esc
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSidebar();
});