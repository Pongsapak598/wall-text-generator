const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const image = new Image();
image.src = "image.png";

image.onload = () => {
  canvas.width = image.width;
  canvas.height = image.height;

  context.drawImage(image, 0, 0);
};

const overlay = document.querySelector(".overlay");
const container = document.querySelector(".img-container");
container.style.position = "relative";
overlay.style.position = "absolute";
overlay.style.top = "50%";
overlay.style.left = "65%";
overlay.style.transform = "translate(-50%, -50%)";

const input = document.getElementById("text-input");
input.addEventListener("input", () => {
  if (input.value !== "") {
    input.classList.add("border");
  } else {
    input.classList.remove("border");
  }
});

