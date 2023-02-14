$(".trandingSlider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    nextArrow: false,
    prevArrow: false,
    dots: true,
    speed: 1500,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 900,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    }],
});