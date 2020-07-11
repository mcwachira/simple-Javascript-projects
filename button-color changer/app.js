


// method 1

let button =  document.querySelector('.button')
const randomHecColorCodes = () =>   {
    let n =  (Math.random() * 0xfffff* 1000000).toString(16)
    let colorCode=  '#' + n.slice(0,6)
    let container =  document.querySelector('.container');
   
  
    container.style.backgroundColor =  colorCode
    button.style.backgroundColor= colorCode

    document.querySelector(".color-code").innerHTML = colorCode
}
button.addEventListener("click", randomHecColorCodes)
randomHecColorCodes()



//method 2
//let colorCd =  Math.floor(Math.random()*16777215).toString(16)
// console.log(colorCd)


//using hex color codes stored in an array


// let button =  document.querySelector('.button')

// let colors = ["#a8efa4", "#705934" ,"#86f752","#cec9eb" ]

// function colorChanger() {
//     let container =  document.querySelector('.container');
//     let randomColor = randomNumber()
//     console.log(randomColor)
//     container.style.backgroundColor =  colors[randomColor]
//     button.style.backgroundColor= colors[randomColor]

//     document.querySelector(".color-code").innerHTML =colors[randomColor]

// }



// function randomNumber() {
//     return Math.floor(Math.random() * colors.length)
//  }

//  button.addEventListener("click", colorChanger)