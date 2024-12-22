import CircleType from "circletype";

export const envensUtility = {
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  stickyHeader() {
    var stickyHeaderContent = document.querySelector(".sticky-header__content");
    if (stickyHeaderContent) {
      var navContent = document.querySelector(".main-menu").innerHTML;
      stickyHeaderContent.innerHTML = navContent;
    }
    window.addEventListener("scroll", function () {
      // Sticky header functionality
      var strickedMenu = document.querySelector(".stricked-menu");
      if (strickedMenu) {
        var headerScrollPos = 130;
        if (window.scrollY > headerScrollPos) {
          strickedMenu.classList.add("stricky-fixed");
        } else {
          strickedMenu.classList.remove("stricky-fixed");
        }
      }
    });
  },
  circleText() {
    const circle = document.querySelectorAll(".curved-circle");
    circle.forEach((element) => {
      new CircleType(element);
    });
  },
  preloader() {
    let preloader = document.querySelector(".preloader");
    if (preloader) {
      preloader.style.transition = "opacity 0.5s"; // Optional: Add transition for smooth fade effect
      preloader.style.opacity = 0;
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); // Adjust the timeout to match the transition duration
    }
  },
  scrollTop() {
    let scrollTargets = document.querySelectorAll(".scroll-to-target");
    if (scrollTargets.length) {
      scrollTargets.forEach(function (element) {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          let target = this.getAttribute("data-target");
          let targetElement = document.querySelector(target);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        });
      });
    }
    window.addEventListener("scroll", function () {
      let headerScrollPos = 130;
      let stricky = document.querySelector(".stricked-menu");

      if (stricky) {
        if (window.scrollY > headerScrollPos) {
          stricky.classList.add("stricky-fixed");
        } else if (window.scrollY <= headerScrollPos) {
          stricky.classList.remove("stricky-fixed");
        }
      }

      let scrollToTop = document.querySelector(".scroll-to-top");
      let strickyScrollPos = 100;

      if (scrollToTop) {
        if (window.scrollY > strickyScrollPos) {
          scrollToTop.style.display = "block"; // Show element (like fadeIn)
          scrollToTop.style.opacity = 1; // Smooth effect (optional)
        } else if (window.scrollY <= strickyScrollPos) {
          scrollToTop.style.opacity = 0; // Smooth effect (optional)
          setTimeout(() => {
            scrollToTop.style.display = "none"; // Hide element (like fadeOut)
          }, 500); // Adjust to match the fade duration
        }
      }
    });
  },
};
