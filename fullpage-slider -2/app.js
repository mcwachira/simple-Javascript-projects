!(function (d)  {

    let items  = document.getElementsByClassName('images-style'),
    slide =0,
    totalItems  =items.length
    moving  = true;

    //set initial mode odf the carousel
    function initialMode () {
        items[totalItems - 1].classList.add('prev')
        items[0].classList.add('active')
        items[1].classList.add('next')
    }

    //setting up the event listeners
function eventListeners()   {
    let next = document.querySelector('carousel__photo--next')
    if(next)    {
        next.addEventListener('click', moveNext);
    }
    let prev = document.querySelector('carousel__photo--prev');
    if(prev)    {
        prev.addEventListener('click', movePrev);
    }
   
   
}


function moveNext() {


    if(!moving) {
        if(slides  === (totalItems -1)) {
            slide =0
        }else   {
            slides++
        }

        updateCarousel(slide)
    }
}

 function movePrev()    {
     if(!moving)    {
         if(slide ===0){
             slides =(totalItems -1)
         }else{
             slides--
         }
         updateCarousel(slide)
     }
 }

 function disableCarouselMovement() {
     moving  = true;
     setTimeout(function() {
         moving = false;

     }, 500)
 }

 function updateCarousel(slide) {
     if(!moving )   {

        disableCarouselMovement()


     let newPrevious =  slide -1, 
     newNext = slide + 1,
     oldPrevious = slide -2,
     oldNext = slide + 2;
     

     if((totalItems -1)> 3) {
         if (newPrevious <=0)   {
             oldPrevious = (totalItems -1)
         }else if(newNext >= (totalItems- 1)){
            oldNext =0;
         }

         if(slide ===0) {
             newPrevious = (totalItems - 1);
            oldPrevious = (totalItems - 2);
         } else if(slide === (totalItems - 1))  {
             newPrevious =  (slide -1 )
             newNext =0;
             oldNext = 1;
         }
         items[oldPrevious].className = itemClassName
         items[oldNext].className =  itemClassName

         items[newPrevious].className = itemClassName
         items[slide].className = itemClassName +"active";
         items[newNext].className = itemClassName + "next "
     }
 }
}

function initializeCarousel()   {
    initialMode()
    eventListeners()
    moving  = false;
}

initializeCarousel()
}(document))