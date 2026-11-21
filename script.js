/* =====================================================
   AFRICANNESE GROUP
   WEBSITE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE NAVIGATION */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        function closeMenu() {
            mainNav.classList.remove("nav-open");
            menuToggle.classList.remove("menu-active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        function openMenu() {
            mainNav.classList.add("nav-open");
            menuToggle.classList.add("menu-active");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.contains("nav-open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        /* CLOSE MENU AFTER CLICKING A LINK */

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                closeMenu();
            });

        });

        /* CLOSE MENU WHEN CLICKING OUTSIDE */

        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                mainNav.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                closeMenu();
            }

        });

        /* CLOSE MENU WITH ESCAPE KEY */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        /* CLOSE MENU WHEN SCREEN BECOMES DESKTOP SIZE */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 700) {
                closeMenu();
            }

        });

    }


    /* SMOOTH SCROLLING */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* FOOTER YEAR */

    const footerYear = document.querySelector(".footer-bottom");

    if (footerYear) {

        footerYear.innerHTML =
            footerYear.innerHTML.replace(
                /©\s*\d{4}/,
                "© " + new Date().getFullYear()
            );

    }

});
