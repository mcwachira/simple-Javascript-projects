!(function(d){
        let items  = document.getElementsByClassName('images-style'), slide =0, totalItems = items.length, moving  = true, slides;

function eventListeners()   {
    let next =  document.querySelector('.carousel__photo--next');

        if(next)    {
            next.addEventListener('click', moveNext)
        }
    let prev =  document.querySelector('.carousel__photo--prev');
        if(prev)    {
            next.addEventListener('click', movePrev)
        }
}

//set initial mode of  the carousel
    function initialMode()  {
    items[totalItems -1].classList.add('prev');
        items[0].classList.add('active');
        items[1].classList.add('next')
    }


    function  moveNext() {
    if(!moving) {
        if(slides === (totalItems -1 )) {
            slide = 0;
        } else    {
        slides++
        }
        updateCarousel(slide)
    }
    }


    function  movePrev() {
    if(!moving) {
        if(slides === 0) {
            slides =  (totalItems- 1);
        } else    {
        slides--
        }
        updateCarousel(slide)
    }
    }

    function disableCarouselMovement() {
    moving = true
        setTimeout(function () {
        moving =  false
        }, 500)
    }

    function updateCarousel(slide)  {
    if(!moving) {

        disableCarouselMovement()

    }
    }
}
(document));