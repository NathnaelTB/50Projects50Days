const links = [
    'https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1064535/pexels-photo-1064535.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3955093/pexels-photo-3955093.jpeg?auto=compress&cs=tinysrgb&w=600'
];

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', () => {
    alert('left arrow clicked');
});

rightArrow.addEventListener('click', () => {
    alert('right arrow clicked');
});
