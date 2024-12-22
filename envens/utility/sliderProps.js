import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax]);

export const sliderProps = {
  heroSlider: {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider__swiper-button-next",
      prevEl: "#main-slider__swiper-button-prev",
    },
    autoplay: {
      delay: 8000,
    },
  },
  testimonial1: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    loop: true,
    pagination: {
      el: ".swiper-dot-style1",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-prev1",
      prevEl: ".swiper-button-next1",
    },
    autoplay: { delay: 9000 },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      375: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      575: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 1,
      },
      992: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1344: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
    },
  },
  team1: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    loop: true,
    direction: "horizontal",
    pagination: {
      el: ".swiper-dot-style1",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-prev1",
      prevEl: ".swiper-button-next1",
    },
    autoplay: { delay: 9000 },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      375: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      575: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
      1344: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
    },
  },
};
