const box = document.querySelectorAll('.box');

const expand = event => {
    removeClass();
    event.target.classList.add('active');
}

function removeClass() {
    box.forEach(item => {
        item.classList.remove('active');
    })
}