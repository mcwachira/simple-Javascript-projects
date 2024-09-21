let start= 10;
let time =  10*60;

function countDown ()   {


let minutes =Math.floor(time/60)
let seconds =  (time % 60);



if( seconds < 10)   {
    seconds = "0" + seconds
}

    document.querySelector('.countDown').innerHTML =` ${minutes} :${seconds}`

        time--;
        if(time === 0)   {
minutes ===0
seconds ===0
        }

    
}

setInterval(countDown, 1000)

