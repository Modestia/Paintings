$('.artists-list-block').slick({
  infinite: false,
  speed: 400,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: '<i class="fa fa-arrow-right"></i>',
  prevArrow: '<i class="fa fa-arrow-left"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});