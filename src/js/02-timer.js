import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

const datetimeInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const items = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timerId = null;

startBtn.disabled = true;

flatpickr(datetimeInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future!',
        position: 'center',
        color: 'red',
      });
    } else {
      startBtn.disabled = false;
    }
  },
});

function onBtnStartClick() {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    const restTime = new Date(datetimeInput.value) - Date.now();

    Object.entries(convertMs(restTime))
      .forEach(([key, value]) => {
        items[key].textContent = addLeadingZero(value);
      });

    if (restTime < 1000) {
      clearInterval(timerId);
      datetimeInput.disabled = false;
    }
  }, 1000);
}

startBtn.addEventListener('click', onBtnStartClick);
