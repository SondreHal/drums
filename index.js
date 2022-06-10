const hiHat = new Audio("sounds/hi-hat.mp3");
const crashCymb = new Audio("sounds/crash-cymbal.mp3");
const rideCymb = new Audio("sounds/ride-cymbal.mp3");
const bass = new Audio("sounds/bass.mp3");
const snare = new Audio("sounds/snare.mp3");
const highTom = new Audio("sounds/high-tom.mp3");
const mediumTom = new Audio("sounds/medium-tom.mp3");
const floorTom = new Audio("sounds/floor-tom.mp3");

const hiHatBtn = document.getElementById("hi-hat");
const crashCymbBtn = document.getElementById("crash-cymbal");
const rideCymbBtn = document.getElementById("ride-cymbal");
const bassBtn = document.getElementById("bass");
const snareBtn = document.getElementById("snare");
const highTomBtn = document.getElementById("high-tom");
const mediumTomBtn = document.getElementById("medium-tom");
const floorTomBtn = document.getElementById("floor-tom");

document.addEventListener("keydown", function (e) {
   if (e.code === "ArrowLeft") {
      hiHat.play();
      hiHat.currentTime = 0;
      hiHatBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         hiHatBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

document.addEventListener("keydown", function (e) {
   if (e.code === "ArrowUp") {
      crashCymb.play();
      crashCymb.currentTime = 0.2;
      crashCymbBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         crashCymbBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

document.addEventListener("keydown", function (e) {
   if (e.code === "ArrowRight") {
      rideCymb.play();
      rideCymb.currentTime = 0;
      rideCymbBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         rideCymbBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

document.addEventListener("keydown", function (e) {
   if (e.code === "Space") {
      bass.play();
      bass.currentTime = 0.03;
      bassBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         bassBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

document.addEventListener("keydown", function (e) {
   if (e.key === "q") {
      snare.play();
      snare.currentTime = 0;
      snareBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         snareBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

document.addEventListener("keydown", function (e) {
   if (e.key === "w") {
      highTom.play();
      highTom.currentTime = 0;
      highTomBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         highTomBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

document.addEventListener("keydown", function (e) {
   if (e.key === "e") {
      mediumTom.play();
      mediumTom.currentTime = 0;
      mediumTomBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         mediumTomBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

document.addEventListener("keydown", function (e) {
   if (e.key === "r") {
      floorTom.play();
      floorTom.currentTime = 0;
      floorTomBtn.style.backgroundColor = "#b0b0b0";
      setTimeout(function () {
         floorTomBtn.style.backgroundColor = "#e8e8e8";
      }, 75);
   }
});

hiHatBtn.addEventListener("mousedown", () => {
   hiHat.play();
   hiHat.currentTime = 0.05;
   hiHatBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      hiHatBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});

crashCymbBtn.addEventListener("mousedown", () => {
   crashCymb.play();
   crashCymb.currentTime = 0.2;
   crashCymbBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      crashCymbBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});

rideCymbBtn.addEventListener("mousedown", () => {
   rideCymb.play();
   rideCymb.currentTime = 0;
   rideCymbBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      rideCymbBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});

bassBtn.addEventListener("mousedown", () => {
   bass.play();
   bass.currentTime = 0;
   bassBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      bassBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});

snareBtn.addEventListener("mousedown", () => {
   snare.play();
   snare.currentTime = 0;
   snareBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      snareBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});

highTomBtn.addEventListener("mousedown", () => {
   highTom.play();
   highTom.currentTime = 0;
   highTomBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      highTomBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});

mediumTomBtn.addEventListener("mousedown", () => {
   mediumTom.play();
   mediumTom.currentTime = 0;
   mediumTomBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      mediumTomBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});

floorTomBtn.addEventListener("mousedown", () => {
   floorTom.play();
   floorTom.currentTime = 0;
   floorTomBtn.style.backgroundColor = "#b0b0b0";
   setTimeout(function () {
      floorTomBtn.style.backgroundColor = "#e8e8e8";
   }, 75);
});
