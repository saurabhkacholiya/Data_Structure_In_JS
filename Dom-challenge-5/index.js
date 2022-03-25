const progressBarDiv = document.querySelector(".progress-bar");
const button = document.querySelector(".button");
let clicked = true;

function handleStart() {
  if (clicked) {
    clicked = false;
    button.innerHTML = "Rest";
    let width = 10;
    const interval = setInterval(() => {
      if (width > 100) {
        clicked = true;
        button.innerHTML = "Start";
        clearInterval(interval);
      } else {
        progressBarDiv.style.width = `${width}%`;
        width += 10;
      }
    }, 100);
  }
}
