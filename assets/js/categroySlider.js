$(".categorySlider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: `<div class="btnNext style='display:none"><span class="material-symbols-outlined sliderNextBTN"> arrow_forward_ios </span></div>`,
    prevArrow: `<div class="btnPrev style='display:none"><span class="material-symbols-outlined sliderPrevBTN"> arrow_back_ios_new </span></div>`,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1008,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false
            },
        }
    ],
});