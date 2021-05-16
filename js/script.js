
$(document).ready(function () {
    $('.block-about__slider').slick({
        arrows: false,
        fade: true,
        dots: true,
    });
    $('.block-what__slider').slick({
        arrows: false,
        fade: true,
        dots: true,

        speed: 1000,
        easing: "ease",

        asNavFor: ".block-what__slider-text",
    });
    $('.block-what__slider-text').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        appendArrows: $('.block-what__slider__arow'),

        speed: 1000,
        easing: "ease",

        asNavFor: ".block-what__slider",
    });
});

/* анімайия при скролі */
const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {

    /* визиваєм функцію при собитіЇ*/
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {


        for (let index = 0; index < animItems.length; index++) {
            const animItemEl = animItems[index];
            /* висота ела */
            const animItemElHeight = animItemEl.offsetHeight;
            /* наскільки опущений */
            const animItemElOffset = offset(animItemEl).top;
            /*  */
            const animStart = 3;

            /* момєнт старта */
            let animItemElPoint = window.innerHeight - animItemElHeight / animStart;
            /* якшо обєкт више окна */
            if (animItemElHeight > window.innerHeight) {
                animItemElPoint = animItemElHeight - window.innerHeight / animStart;
            }

            /* добавляєм клас з анімацийой */
            if ((pageYOffset > animItemElOffset - animItemElPoint) && pageYOffset < (animItemElOffset + animItemElHeight)) {
                animItemEl.classList.add('_active');
            } else {
                if (!animItemEl.classList.contains('_anim-no-hide')) {
                    animItemEl.classList.remove('_active');
                }

            }
        }
    }
    /* оприділяє скрол */
    function offset(elem) {
        const rect = elem.getBoundingClientRect(),
            scrolLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrolTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrolTop, left: rect.left + scrolLeft }

    }

    /* визиваєм при запускі з задєржкой */
    setTimeout(() => {
        animOnScroll();
    }, 300);
}


