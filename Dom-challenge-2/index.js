let draw = false;
const container = document.querySelector(".container");
const colorElm = document.querySelector(".input-color");
const sizeVal = document.querySelector(".input-number");

window.addEventListener("mousedown", () => (draw = true));
window.addEventListener("mouseup", () => (draw = false));

function createPixel(size) {
  container.style.setProperty("--size", size);

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = colorElm.value;
    });

    div.addEventListener("mouseover", () => {
      if (!draw) return;
      div.style.backgroundColor = colorElm.value;
    });

    container.appendChild(div);
  }
}

createPixel(sizeVal.value);

function reset(size) {
  container.innerHTML = "";
  if (size) {
    createPixel(size);
  } else {
    createPixel(sizeVal.value);
  }
}

sizeVal.addEventListener("keyup", (e) => {
  reset(e.target.value);
});
