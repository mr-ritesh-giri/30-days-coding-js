const second = document.querySelector(".second-hand");
const minute = document.querySelector(".minute-hand");
const hour = document.querySelector(".hour-hand");

function setClock() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360 - 90;
  second.style.transform = `rotate(${secondDegree}deg)`;
  console.log("seconds", seconds);

  // Minutes
  const minutes = now.getMinutes();
  const minuteDegree = (minutes / 60) * 360 - 90;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  console.log("minute", minutes);

  // Hours
  const hours = now.getHours();
  const hourDegree = (hours / 12) * 360 - 90 + (minutes / 60) * 30;
  hour.style.transform = `rotate(${hourDegree}deg)`;
  console.log("hours", hours);
}
setInterval(setClock, 1000);
