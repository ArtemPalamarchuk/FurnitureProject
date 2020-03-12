class Slider {
    constructor() {
        this.index = 1;
        this.box = document.querySelector('.carousel-container');
        this.slidesBox = document.querySelector('.carousel-slides');
        this.slides = document.querySelectorAll('.slide');
        this.btns = document.querySelectorAll('.btn');
        this.size = this.box.clientWidth;
        this.position();
        this.carousel();
    }

    position = () => {
        this.slidesBox.style.transform = 'translateX(' + (-this.index * this.size) + 'px)';
    };

    carousel = () => {
        for (let i = 0; i < this.btns.length; i++) {
            this.btns[i].addEventListener('click', this[this.btns[i].id].bind(null, this));
        }
    };

    prev = box => {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        let size = box.size;
        //this.index <= 0 ? false : this.index++;
        this.index > 0 && this.index--;
        box.slidesBox.style.transform = 'translateX(' + (-this.index * size) + 'px)';
        box.jump();
    };

    next = box => {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        let max = box.slides.length;
        let size = box.size;
        this.index >= max - 1 ? false : this.index++;
        // this.index < max && this.index++
        box.slidesBox.style.transform = 'translateX(' + (-this.index * size) + 'px)';
        box.jump();
    };

    jump = () => {
        let size = this.size;
        this.slidesBox.addEventListener('transitionend',  () => {
            this.slides[this.index].id === "firstClone" ? this.index = 1 : this.index;
            this.slides[this.index].id === "lastClone" ? this.index = this.slides.length - 2 : this.index;
            this.slidesBox.style.transition = "none";
            this.slidesBox.style.transform = 'translateX(' + (-this.index * size) + 'px)';
        });
    };

    /*autoSlide = () => {
        setInterval(() => {
            this.next(this)
        }, 2000)
    }*/
}

new Slider();