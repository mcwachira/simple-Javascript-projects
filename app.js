

function displayTime()  {
    const time =  new Date

    const hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds =  time.getSeconds()
    
    if(minutes < 10)    {
        minutes = "0" + minutes
    }
    if(seconds < 10)    {
        seconds = "0" + seconds
    }

    let clockTime = hours + ":" + minutes + ":" + seconds;
  let clock  =  document.querySelector(".clock")
  clock.innerText = clockTime
   

    setTimeout("displayTime()", 1000)
}


displayTime()