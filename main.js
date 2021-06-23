const score = document.querySelector(".score");
const start = document.querySelector(".start");
const gameArea = document.querySelector(".gameArea");
const car = document.createElement("div");
car.classList.add("car");
start.addEventListener("click", startGame);

document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};
const setting = {
  start: false,
  score: 0,
  speed: 3
};

function startGame() {
  start.classList.add("hide");
  setting.start = true;
  gameArea.appendChild(car);
  // Для плавной анимации встроенная в дс функция
  requestAnimationFrame(playGame);
}

function playGame() {
  console.log("PlayGame");
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}

function startRun(event) {
  event.priventDefault;
  console.log(event.key);
  keys[event.key] = true;
}
function stopRun(event) {
  setting.start = false;
  event.priventDefault;
  console.log(event.key);
}
