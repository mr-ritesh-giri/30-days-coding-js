// const data = [
//   { title: "CLAP", h1: "A", key: 65 },
//   { title: "HIHAT", h1: "S", key: 83 },
//   { title: "KICK", h1: "D", key: 68 },
//   { title: "OPENHAT", h1: "F", key: 70 },
//   { title: "BOOM", h1: "G", key: 71 },
//   { title: "RIDE", h1: "H", key: 72 },
//   { title: "SNARE", h1: "J", key: 74 },
//   { title: "TOM", h1: "K", key: 75 },
//   { title: "TONY", h1: "L", key: 76 },
// ];

// function drum() {
//   const drumKick = document.querySelector(".drum-kicks");

//   let clutter = "";

//   data.forEach(function (val) {
//     clutter += `<div class="keys">
//   <h1>${val.h1}</h1>
//   <span data-key="${val.key}" class="title">${val.title}</span>
// </div>`;
//   });

//   drumKick.innerHTML = clutter;
// }
// drum();

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keys = document.querySelector(`.keys[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  keys.classList.add("play");

  keys.addEventListener("transitionend", function () {
    keys.classList.remove("play");
  });

  // audio.addEventListener("ended", function () {
  //   keys.classList.remove("play");
  // });
});
