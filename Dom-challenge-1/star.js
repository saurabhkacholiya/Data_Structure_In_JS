const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

const events = ["click", "mouseover", "mouseout"];

for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;

  events.forEach((event) => {
    stars[i].addEventListener(event, function (e) {
      handleListener.call(this, e);
    });
  });
}

function handleRest() {
  output.innerHTML = `Please Rate`;
  stars.forEach((star) => {
    star.classList.remove("orange");
  });
}

function handleListener(event) {
  const starValue = this.starValue;

  if (event.type === "click") {
    output.innerHTML = `you have Selected ${starValue} stars.`;
  }

  stars.forEach((star, idx) => {
    if (event.type === "click") {
      handleClasses(star, idx, starValue, "orange");
    }

    if (event.type === "mouseover") {
      handleClasses(star, idx, starValue, "yellow");
    }

    if (event.type === "mouseout") {
      star.classList.remove("yellow");
    }
  });

  function handleClasses(star, idx, starValue, className) {
    if (idx < starValue) {
      star.classList.add(className);
    } else {
      star.classList.remove(className);
    }
  }
}
