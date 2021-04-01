const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const getTime = () => {
  const now = new Date();

  const seconds = (now.getSeconds() / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${seconds}deg)`;

  if (seconds === 360) {
    secondHand.style.transition = "none";
  }

  const minutes = (now.getMinutes() / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutes}deg)`;
  if (minutes === 360) {
    minuteHand.style.transition = "none";
  }

  const hours = (now.getHours() / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hours}deg)`;

  if (hours === 360) {
    hourHand.style.transition = "none";
  }
};

setInterval(getTime, 1000); // don't call the function in the set interval
