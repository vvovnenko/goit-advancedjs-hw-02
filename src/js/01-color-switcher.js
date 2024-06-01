const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function toggleStartButton() {
  startButton.disabled = !startButton.disabled;
}

function toggleStopButton() {
  stopButton.disabled = !stopButton.disabled;
}

let intervalId;

toggleStopButton();

startButton.addEventListener('click', () => {
  toggleStartButton();
  toggleStopButton();

  intervalId = setInterval(changeBodyColor, 1000);
});

stopButton.addEventListener('click', () => {
  toggleStartButton();
  toggleStopButton();

  clearInterval(intervalId);
});
