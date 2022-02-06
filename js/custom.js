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
    });
    
});