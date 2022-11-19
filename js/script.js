function countdown() {
  const nums = document.querySelectorAll(".nums span");
  nums.forEach((num, idx) => {
    const penultimate = nums.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== penultimate) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      }
      if (+idx === 2) {
        document.getElementById("js-counter").classList.add("hide-element");
        document.getElementById("js-heart").classList.add("show-element");
        document
          .getElementById("js-heart")
          .addEventListener("click", onClickHeart);
      }
    });
  });
}
function onClickHeart() {
  document.getElementById("js-wrapper-counter").classList.add("hide-element");
  document.getElementById("js-birthday").classList.add("show-element");
  var audio = document.getElementById("audio");
  if (audio) {
    audio.play();
    audio.muted = false;
  }
  document.getElementById("js-heart").classList.remove("show-element");
}
function addStar() {
  var s = document.createElement("div");
  s.className = "star";
  s.style.setProperty("--size", Math.random() * 10 + 3 + "vmin");
  s.style.left = Math.floor(Math.random() * 100) + "%";
  s.style.top = Math.floor(Math.random() * 100) + "%";
  s.onanimationend = function () {
    this.remove();
  };
  document.body.appendChild(s);
}

setInterval(addStar, 50);
window.onload = function () {
  // when the sound has been loaded, execute your code
  countdown();
  addStar();
};
