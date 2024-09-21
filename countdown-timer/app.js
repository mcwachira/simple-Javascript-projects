let deadline =  new Date('11 jul 2020 13:20:00')

function countDownTimer()  {
    let total, min ,sec ,hrs ,dys;

    total = Date.parse(deadline)  - Date.parse(new Date ())
    if(total > 0)   {
    dys = Math.floor( total /(1000* 60 * 60 * 24))
    hrs =  Math.floor((total)/  (1000*60*60) %24)
    min = Math.floor((total / 1000/ 60) % 60)
    sec = Math.floor((total/1000) %60)

    }

    let days=  document.querySelector('.days').innerHTML = dys;
    let hours=  document.querySelector('.hours').innerHTML =("0" + hrs).slice(-2)
    let minutes=  document.querySelector('.minutes').innerHTML =("0" + min).slice(-2)
    let seconds=  document.querySelector('.seconds').innerHTML = ("0" + sec).slice(-2)
    

let interval  = setInterval(countDownTimer, 1000)
}
countDownTimer()