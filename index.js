
const crash = document.querySelector(".w");
crash.addEventListener("click", function () {
  let audio = new Audio("sounds/crash.mp3");
  audio.play();
});
const kick = document.querySelector(".a");
kick.addEventListener("click", function () {
  let audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
});
const snare = document.querySelector(".s");
snare.addEventListener("click", function () {
  let audio = new Audio("sounds/snare.mp3");
  audio.play();
});
const tom1 = document.querySelector(".d");
tom1.addEventListener("click", function () {
  let audio = new Audio("sounds/tom-1.mp3");
  audio.play();
});
const tom2 = document.querySelector(".j");
tom2.addEventListener("click", function () {
  let audio = new Audio("sounds/tom-2.mp3");
  audio.play();
});
const tom3 = document.querySelector(".k");
tom3.addEventListener("click", function () {
  let audio = new Audio("sounds/tom-3.mp3");
  audio.play();
});
const tom4 = document.querySelector(".l");
tom4.addEventListener("click", function () {
  let audio = new Audio("sounds/tom-4.mp3");
  audio.play();
});


document.addEventListener("keypress", function (event) { 
    const key = event.key;
    
    switch (key) {
      case "w":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    }
})
