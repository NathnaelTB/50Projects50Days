const icon = document.getElementById('icon');
const menu = document.querySelectorAll('.menu');

icon.addEventListener('click', clickHandler);

function clickHandler(event) {
    const iconClass = icon.firstChild.classList;

    if(event.target.classList.contains('fa-xmark')){
        iconClass.remove('fa-xmark');
        iconClass.add('fa-bars');
        menu.forEach((item) => {
            item.classList.add('disappear');
        });
    }
    else if(event.target.classList.contains('fa-bars')) {
        iconClass.remove('fa-bars');
        iconClass.add('fa-xmark');
        menu.forEach((item) => {
            item.classList.remove('disappear');
        });
    }
}