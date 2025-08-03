var swiper1 = new Swiper(".slide-container-1", {
  slidesPerView: 4,
  spaceBetween: 32,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
});


var swiper2 = new Swiper(".slide-container-2", {
  slidesPerView: 3,
  spaceBetween: 32,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 3,
    },
  },
});
