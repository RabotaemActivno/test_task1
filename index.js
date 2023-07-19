const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    clearInterval(intervalId);

    let remainingSeconds = seconds;
    updateTimerDisplay(remainingSeconds);

    intervalId = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        return;
      }

      updateTimerDisplay(remainingSeconds);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

const updateTimerDisplay = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timerEl.textContent = formattedTime;
};

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
