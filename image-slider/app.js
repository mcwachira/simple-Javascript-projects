// let imageSlider =  document.querySelectorAll('.slider'),
// leftArrow = document.querySelector('#arrow-left'),
// rightArrow =  document.querySelector("#arrow-right"),
// current =0;

// function reset(){
//     for (let i =0; i<imageSlider.length;i++){
//         imageSlider[i].style.display = "none"
//     }
// }

// function startSlider(){   
//     reset()
//     imageSlider[0].style.display = 'block'

// }

// function moveNext() {
//     reset()
//     imageSlider[current + 1].style.display = 'block'
//     current ++
// }

// function movePrev() {
//     reset()
//     imageSlider[current - 1].style.display = 'block'
//     current --
// }

// leftArrow.addEventListener('click', function()  {
//     if(current === 0)    {
//         current = imageSlider.length;
       
//     }
//     movePrev()
// })

// rightArrow.addEventListener('click', function() {
//     if(current === (imageSlider.length))    {
//         current = -1
//     }
   
//     moveNext()
// })

// startSlider()



let imageSlider =  document.querySelectorAll('.slider'),
current =0;


function slider()   {
    for(let i =0; i<imageSlider.length; i++)    {
        imageSlider[i].style.display = 'none'
    }
    current ++;
    if(current > (imageSlider.length))    {
        current = 1
    }
    imageSlider[current - 1].style.display = "block"

    setTimeout(slider, 5000)
}

slider()