const aboutusText = document.querySelector(".about-us__title");

const greetings = [
    'Hello, JS',
    'добрий день, JS',
    'Hola, JS'
]

function getRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

aboutusText.innerText = getRandomEl(greetings);