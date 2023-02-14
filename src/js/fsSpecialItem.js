$(".fsSpecialItemSlider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    nextArrow: `<div class="tryNewNext hidden"><span class="material-symbols-outlined tryNewFoodNext"> arrow_forward_ios </span></div>`,
    prevArrow: `<div class="tryNextPrev hidden"><span class="material-symbols-outlined tryNewFoodPrev"> arrow_back_ios_new </span></div>`,
    speed: 2000,
    autoplaySpeed: 4000,
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
                settings: 'unslick',
                arrows: false,
                dots: true,
            },
        }
    ],
});