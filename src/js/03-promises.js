import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(shouldResolve ? resolve : reject, delay, { position, delay });
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const delay = parseInt(event.currentTarget.elements.delay.value);
  const step = parseInt(event.currentTarget.elements.step.value);
  const amount = parseInt(event.currentTarget.elements.amount.value);

  if ([delay, step, amount].some(value => value < 0)) {
    iziToast.show({
      message: `Please enter a positive numbers`,
      position: 'topCenter',
      color: 'yellow',
    });

    return;
  }

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        iziToast.show({
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          position: 'topCenter',
          color: 'green',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          position: 'topCenter',
          color: 'red',
        });
      });
  }
}
