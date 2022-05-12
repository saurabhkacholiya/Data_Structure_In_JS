const main = document.getElementById("main_container");
const button = document.getElementById("showBtn");

let queue = 0;
const MAX_CALLS = 3;

function createProgressBar() {
  let width = 0;
  const container = document.createElement("div");
  container.className = "container";
  const progressBarDiv = document.createElement("div");
  progressBarDiv.className = "progress-bar";

  container.appendChild(progressBarDiv);
  main.appendChild(container);

  const interval = setInterval(function () {
    console.log("am i getting called");
    if (width === 100) {
      if (queue === MAX_CALLS) {
        queue = 0;
      } else if (queue > MAX_CALLS) {
        queue--;
        createProgressBar();
      }
      clearInterval(interval);
    } else {
      width++;
      progressBarDiv.style.width = `${width}%`;
    }
  }, 100);
}

function handleSubmit() {
  queue++;
  if (queue <= MAX_CALLS) {
    createProgressBar();
  }
}
