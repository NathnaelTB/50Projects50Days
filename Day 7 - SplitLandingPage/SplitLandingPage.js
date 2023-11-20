const samsung = document.querySelector('.samsung');
const iphone = document.querySelector('.iphone');

samsung.addEventListener('mouseenter', expand);
samsung.addEventListener('mouseleave', removeExpand);

iphone.addEventListener('mouseenter', expand);
iphone.addEventListener('mouseleave', removeExpand);

function expand(event) {
    event.target.classList.add('selected');
}

function removeExpand(event) {
    event.target.classList.remove('selected');
}