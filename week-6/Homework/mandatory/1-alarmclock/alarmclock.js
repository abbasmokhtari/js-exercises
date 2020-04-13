let timePut = document.querySelector("#alarmSet");

let alarmBtn = document.querySelector('#set');

let reWrite = document.querySelector('#timeRemaining');


alarmBtn.addEventListener('click', function () {
  reWrite.innerText = 'Time Remaining:00:' + timePut.value;
})




function setAlarm() { }



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
