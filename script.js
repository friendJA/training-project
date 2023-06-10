const yellow1 = document.getElementById("yellow1");
const red2 = document.getElementById("red1");
const green3 = document.getElementById("green1");

yellow1.addEventListener("click", function() {
  document.body.style.backgroundColor = "yellow";
});
red2.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});
green3.addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});



function changeFontSize(value) {
  let headerLinks = document.querySelectorAll("header a");
  for (var i = 0; i < headerLinks.length; i++) {
    headerLinks[i].style.fontSize = value + "px";
  }
}

const block = document.querySelector('.color-block');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

rightArrow.addEventListener('click', () => {
  block.style.left = '0';
  leftArrow.style.left = '0';
  rightArrow.style.right = '80%';
});


leftArrow.addEventListener('click', () => {
  block.style.left = '-300px';
  leftArrow.style.left = '0';
  rightArrow.style.right = '0';
});




const color = document.getElementById("colorpick");
const milestone = document.getElementById("milestone");

color.addEventListener("input", () => {
  const chosenColor = color.value;
  milestone.style.backgroundColor = chosenColor
});

const milestone4 = document.getElementById("milestone4");
color.addEventListener("input", () => {
  const chosenColor = color.value;
  milestone4.style.backgroundColor = chosenColor
});
const milestone2 = document.getElementById("milestone2");
color.addEventListener("input", () => {
  const chosenColor = color.value;
  milestone2.style.backgroundColor = chosenColor
});
const milestone3 = document.getElementById("milestone3");
color.addEventListener("input", () => {
  const chosenColor = color.value;
  milestone3.style.backgroundColor = chosenColor
});