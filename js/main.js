// main

const $arrow = document.querySelectorAll(".arrow");

function change() {
  this.style.opacity = "0.5";
  this.innerHTML = "알아보기 &emsp; &ensp; →";
}

function reset() {
  this.style.opacity = "1";
  this.innerHTML = "알아보기 &emsp; →";
}

for (let el of $arrow) {
  el.addEventListener("mouseover", change);
  el.addEventListener("mouseleave", reset);
}
