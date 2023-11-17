$(document).ready(function () {

   $('.header-banner-wrapper').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
   });

   clients slider
   $('.clients-content').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
   });
});
