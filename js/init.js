window.addEventListener("DOMContentLoaded", ready);

function ready() {

    $(".sliderFor").slick({
        // autoplay: true,
        // speed: 3000,
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

    function f() {

        const slider = document.getElementById('slider');
        const sliderHeaderBackground = document.getElementById('sliderBackground');
        const sliderHeaderBackground1 = document.getElementById('sliderBackground1');
        const sliderTitle = document.getElementById('sliderTitle');

        //slider.style.height = '100%';
        slider.style.flexGrow = '0';

        //
        // setTimeout(() => {
        //         sliderHeaderBackground.style.height = '200px'
        //     }, 500
        // );
        //
        // setTimeout(() => {
        //         sliderHeaderBackground1.style.height = '200px'
        //     }, 1000
        // );
        //
        // setTimeout(() => {
        //         sliderTitle.style.visibility = "visible";
        //     }, 1700
        // );

    }
}
