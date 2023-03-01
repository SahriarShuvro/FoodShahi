$(".foodCards").slick({
  dots: true,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 900,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: `<span class="arrows material-symbols-outlined arrow absolute flex left-0 bg-white rounded-full shadow-md shadow-gray-400 text-sm py-1 px-2 w-7 h-7 z-[10]"> arrow_back_ios </span>`,
  nextArrow: `<span class="arrows material-symbols-outlined arrow absolute flex right-0 bg-white rounded-full shadow-md shadow-gray-400 text-sm py-1 px-2 w-7 h-7 z-[10]"> arrow_forward_ios </span>`,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 250,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
