$(function(){
  $('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/head/slide-next.svg"></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/head/slide-prev.svg"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {

      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }
  ]
});
});