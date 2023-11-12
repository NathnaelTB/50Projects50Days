const body = document.getElementsByTagName('body')[0];
const corner = document.getElementsByClassName('corner')[0];
const nav = document.getElementsByClassName('nav')[0];

const getOption = () => {
    body.classList.add('rotator');
    corner.classList.add('option-rotator');
    nav.classList.add('nav-unrotate');
}

const cancel = () => {
    body.classList.remove('rotator');
    corner.classList.remove('option-rotator');
    nav.classList.remove('nav-unrotate');
}