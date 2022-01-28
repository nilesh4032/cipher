
const title = document.createElement('p');
title.innerText = 'stopwatch';
title.className = 'text-content';
document.body.appendChild(title);

const subtitle = document.createElement('p');
subtitle.innerText = 'javascript stopwatch';
subtitle.className = 'text-content';
document.body.appendChild(subtitle);

const timer = document.createElement('p');
timer.innerText = '00:00';
timer.className = 'text-content';
document.body.appendChild(timer);

const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
document.body.appendChild(buttonContainer);

let time = 000, stopwatch;
const formatTime = (time) => {
  if(time < 60) {
    return `00:${time < 10 ? `0${time}` : time}`;
  } else {
    const minute = Math.floor(time/60);
    const seconds = time%60;
    return `${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
}

const button1 = document.createElement('button');
button1.innerText = 'Start';
button1.className = 'button';
button1.addEventListener('click', () => {
  button1.disabled = true;
  stopwatch = setInterval(() => {
    time++;
    timer.innerText = formatTime(time);
  }, 1000);
});
buttonContainer.appendChild(button1);
const button2 = document.createElement('button');
button2.innerText = 'Stop';
button2.className = 'button';
button2.addEventListener('click', () => {
  button1.disabled = false;
  clearTimeout(stopwatch);
});
buttonContainer.appendChild(button2);
const button3 = document.createElement('button');
button3.innerText = 'Reset';
button3.className = 'button';
button3.addEventListener('click', () => {
  button1.disabled = false;
  stopwatch = undefined;
  time = 0;
  timer.innerText = '00:00';
});
buttonContainer.appendChild(button3);