import * as Price from "./price.js";
Price.getCryptoPrice2();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 10,
    stagePadding: 0,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 5,
      },
      576: {
        items: 6,
      },
      768: {
        items: 7,
      },
      992: {
        items: 9,
      },
      1200: {
        items: 10,
      },
    },
  });
});
