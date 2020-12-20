$(function () {

    $('.header-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-dotshead',

    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header-slider',
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });

    $('.travel--slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-dotshead',

    });
});