window.addEventListener('DOMContentLoaded', () => {
    //slider
    let btnPrev = document.querySelector('.slider-btn-prev'),
        btnNext = document.querySelector('.slider-btn-next'),
        slidsLine = document.querySelector('.slider-wrapper-slids'),
        dots = document.querySelector('.slider-dots2');

    const SLIDE_WIDTH = 1210;

    let offset = 0,
    
        countImages = 4,
        maxOffset = (countImages - 1) * SLIDE_WIDTH,
        
        flashActiveDot = () => {
            const currentSlideIndex = Math.abs(offset / SLIDE_WIDTH);

            Array.prototype.forEach.call(
                dots.querySelectorAll('div.slider-dots-item'), 
                (elmDiv, i) => {
                    elmDiv.classList.remove('active-slider');
                    if (i == currentSlideIndex) {
                        elmDiv.classList.add('active-slider');
                    }                               
                }
            );
        };

        /* 3590 */

        offset = SLIDE_WIDTH * 1 * -1;
        slidsLine.style.transform = `translateX(${offset}px)`;
        flashActiveDot();

    btnNext.addEventListener('click', () => {
        if (offset <= maxOffset * -1) {
            offset = 0;
        } else {
            slidsLine.style.transform = `translateX(${offset -= 1210}px)`;
        }

        slidsLine.style.transform = `translateX(-${offset}px)`;
        flashActiveDot();
    });

    btnPrev.addEventListener('click', () => {
        if (offset >= 0) {
            offset = 0;
        } else {
            slidsLine.style.transform = `translateX(${offset += 1210}px)`;
        }

        slidsLine.style.transform = `translateX(${offset}px)`;
        flashActiveDot();
    });

    //mobile menu
    let btnOpen = document.querySelector('.btn-open'),
        btnClose = document.querySelector('.mob-menu-btn'),
        menu = document.querySelector('.wrapper-nav-header'),
        doc = document.querySelector('.document');

    btnOpen.addEventListener('click', () => {
        menu.style.transform = 'translateX(0)';
        doc.style.overflow = 'hidden';
    });

    btnClose.addEventListener('click', () => {
        menu.style.transform = '';
        doc.style.overflow = '';
    });
});