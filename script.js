const quotebtn = document.getElementById("new-quote");
const quotetext = document.querySelector(".quote");
const audio = new Audio("sounds/click 1.mp3");
// for the first time
fetch("https://api.kanye.rest")
  .then((response) => response.json())
  .then((data) => (quotetext.innerHTML = data.quote));
// next times
quotebtn.addEventListener("click", function () {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => (quotetext.innerHTML = data.quote));
});
document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", function () {
    audio.play();
  })
);
