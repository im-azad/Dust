// Testimonials activation


$(document).ready(function () {

  $('.testimonial-content-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.client-thumbs',
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.client-thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial-content-slider',
    centerMode: true,
    focusOnSelect: true,
    dots: false,
    arrows: false,
    centerPadding: '0',
    infinite: true,

    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]

  });


});