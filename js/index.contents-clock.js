const clockContainer = document.querySelector(".contents__clock");

function updateClock() {
clockContainer.innerText = new Date().toLocaleTimeString('uk');
}

setInterval(updateClock, 1000);