
let slides = document.getElementsByClassName('images-style')

let slider = 1
function moveNext(slider )  {
if( slider > slides.length)  {
slider = 1
}
for(let i =0; i<slides.length;i++)   {
    slides[i].style.display = 'none'
}
slides[slider- 1].style.display = 'block'

}

function movePrev() {
    if(slider < slider.length)  {
        slider = slider.length;
        
    }
    slider--;
}

let next = document.querySelector('carousel__photo--next')
  if(next)  {
      next.addEventListener('click'. moveNext)
  }
  let prev = document.querySelector('carousel__photo--prev')
  if(prev)  {
      prev.addEventListener('click'. movePrev)
  }