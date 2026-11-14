(function () {
    var menu = document.getElementById("navbar-menu");
    var burger = document.querySelector(".hamburger");
    var searchForm = document.querySelector(".search-form");
    var searchBtn = document.querySelector(".search-toggle");

    function setMenu(open) {
        if (!menu) return;
        menu.classList.toggle("active", open);
        if (burger) burger.setAttribute("aria-expanded", String(open));
    }

    function setSearch(open) {
        if (!searchForm) return;
        searchForm.classList.toggle("active", open);
        if (searchBtn) searchBtn.setAttribute("aria-expanded", String(open));
        if (open) {
            var input = searchForm.querySelector("input");
            if (input) input.focus();
        }
    }

    window.toggleMenu = function () {
        var open = !menu.classList.contains("active");
        setSearch(false);
        setMenu(open);
    };

    window.toggleSearch = function () {
        var open = !searchForm.classList.contains("active");
        setMenu(false);
        setSearch(open);
    };

    // tutup menu setelah salah satu link diklik
    if (menu) {
        menu.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", function () { setMenu(false); });
        });
    }

    // tutup panel kalau klik di luar navbar, atau tekan Esc
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".navbar")) { setMenu(false); setSearch(false); }
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { setMenu(false); setSearch(false); }
    });

    // layar dibesarkan -> reset state mobile
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1180) { setMenu(false); setSearch(false); }
    });
})();