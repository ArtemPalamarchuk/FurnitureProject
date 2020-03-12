$(".sliderFor").slick({
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    fade: !1,
    infinite: !0,
    asNavFor: ".sliderNav",
    dots: false,
    prevArrow: false,
    nextArrow: false
});
$(".sliderNav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".sliderFor",
    dots: !1,
    centerMode: !0,
    focusOnSelect: !0,
    infinite: !0,
    arrows: !0
});

/* $(".reviewsSlider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: !1
}),*/
