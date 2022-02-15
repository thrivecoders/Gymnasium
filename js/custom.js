$(document).ready(function(){
    'use strict';

    // Slick Slider on the Banner
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
    });

    // VenoBox on the About
    new VenoBox({
        selector: '.abt-vdo'
    });

    // VenoBox on the Gallery
    new VenoBox({
        selector: '.gall-pop',
        numeration: true,
        share: true,
        // problem :: spinner & spinColor add korte parchi na
        spinner: 'wave',
        spinColor: '#e23e38'
    });
    

    // Slick Slider on the Testimonial
    $('.feedback-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
        ],
    });


    // Counter Up on the Funfact
    $('.counter').counterUp({
        delay: 1,
        time: 800,
    });

    // Slick Slider on the Brand
    $('.brand-slider').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                }
              },
        ],
    });
    
});