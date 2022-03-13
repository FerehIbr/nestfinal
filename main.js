AOS.init();

$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".news").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    arrows: false,
  });

  $(".sidebar-menu i").click(function () {
    $(this)
      .parents(".dropdown")
      .find(".dropdown")
      .not($(this).siblings("ul"))
      .slideUp();
    $(this).siblings("ul").stop(true, true).slideToggle();
    $(this).toggleClass("active");
  });

  $("#btn-open-navbar, #btn-close-navbar, .overlay").click(function () {
    $(".overlay, .sidebar").toggleClass("active");
  });
});
