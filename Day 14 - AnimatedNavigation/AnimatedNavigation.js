const icon = document.getElementById('icon');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

icon.addEventListener('click', clickHandler);

function clickHandler(event) {
    const iconClass = icon.firstChild.classList;

    if(event.target.classList.contains('fa-xmark')){
        iconClass.remove('fa-xmark');
        iconClass.add('fa-bars');
        menu.classList.add('disappear');
        nav.classList.add('nav-after');

    }
    else if(event.target.classList.contains('fa-bars')) {
        iconClass.remove('fa-bars');
        iconClass.add('fa-xmark');
        menu.classList.remove('disappear');
        nav.classList.remove('nav-after');
    }
}