const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const image = new Image();
const image2 = new Image();
let s = '';

function loadImage() {
  image.src = "image.png";
  image2.src = "image2.png";

  function drawText() {
    const text = document.getElementById("canvas");
    const ctx = text.getContext("2d");
    const input = document.getElementById("font-slider");
    const font = input.value + "px Arial";
    ctx.font = font;

    const color = document.getElementById("color-selector").value;
    ctx.fillStyle = color;
    ctx.save();

    const upDown = document.getElementById("upDown-slider").value;
    const leftRight = document.getElementById("leftRight-slider").value;
    const tilt = document.getElementById("tilt-slider").value; // Access tilt slider value
    const textRotate = tilt * Math.PI / 180; // Calculate rotation degree from slider value
    ctx.translate(upDown, leftRight);
    ctx.rotate(textRotate);
    ctx.fillText(document.getElementById("text-input").value, 0, 0);
    ctx.restore();
  }
  
  image.onload = () => {
    
    canvas.width = image.width;
    canvas.height = image.height;
    
    context.drawImage(image2, 0, 0);
    
    context.globalCompositeOperation="destination-over";

    drawText();

    context.globalCompositeOperation="destination-over";
    
    context.drawImage(image, 0, 0);
  };
}
loadImage()

function downloadImage() {
  var canvas = document.getElementById("canvas");
  var anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = "IMAGE.PNG";
  anchor.click()
}
  
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".img-container");

setBoxPosition();

function removeBorder() {
  const input = document.getElementById("text-input");
  input.addEventListener("input", () => {
    if (input.value !== "") {
      input.classList.add("border");
    } else {
      input.classList.remove("border");
    }
    loadImage();
  });
}
removeBorder();