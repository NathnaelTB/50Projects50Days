const key = document.getElementById('key');
const keyCode = document.getElementById('keyCode');
const code = document.getElementById('code');
const start = document.querySelector('.start');
const container = document.querySelector('.container');

const displayKeyCode = (event) => {
    // adding class that makes the instruction disappear and the keycode appear
    start.classList.add('start-after');
    container.classList.add('container-after');

    // adding the codes to the corresponding values
    key.value = event.key;
    keyCode.value = event.keyCode;
    code.value = event.code;
}