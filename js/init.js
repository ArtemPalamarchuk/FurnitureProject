window.addEventListener("DOMContentLoaded", ready);

function ready() {

    function f() {

        const slider = document.getElementById('slider');
        const sliderHeaderBackground = document.getElementById('sliderBackground');
        const sliderHeaderBackground1 = document.getElementById('sliderBackground1');
        const sliderTitle = document.getElementById('sliderTitle');

        slider.style.height = '100%';

        setTimeout(() => {
                sliderHeaderBackground.style.height = '200px'
            }, 500
        );

        setTimeout(() => {
                sliderHeaderBackground1.style.height = '200px'
            }, 1000
        );

        setTimeout(() => {
                sliderTitle.style.visibility = "visible";
            }, 1700
        );

    }


}
