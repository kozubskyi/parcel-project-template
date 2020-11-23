$(document).ready(function () {

    
    
  $('#reviews-slider').slick({
    asNavFor: '#gallery',
    responsive: [
    
    {
       breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
      }
      }
    ]

});
  $('#gallery').slick({
    asNavFor: '#reviews-slider',
    responsive: [
    
    {
       breakpoint: 768,
        settings: {
        asNavFor: '#reviews-slider',
        arrows: true,
        centerMode: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
      },
       {
       breakpoint: 4000,
        settings: {
        asNavFor: '#reviews-slider',
        arrows: false,
        centerMode: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1
      }
      }
      
  ]
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // asNavFor: '#reviews-slider',
  // dots: false,
  // centerMode: false,
  // focusOnSelect: true
  });
  
$(window).resize(function() {
    width = $(window).width();
    if (width >= 1354) {
    new WOW().init({

boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
    
  });
    }
});

});




		