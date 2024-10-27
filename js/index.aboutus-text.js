const aboutusText = document.querySelector(".aboutus__title");

const greetings = [
    'Hello, JS',
    'добрий день, JS',
    'Hola, JS'
]

function getRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

aboutusText.innerText = getRandomEl(greetings);