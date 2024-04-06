const links = [
    'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VudGVyfGVufDB8fDB8fHww',
    'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1604803778321-0424dabac230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VudGVyfGVufDB8fDB8fHww',
    'https://media.istockphoto.com/id/1203599952/photo/assortment-of-fresh-organic-fruits-and-vegetables-in-rainbow-colors.webp?b=1&s=170667a&w=0&k=20&c=92WdbVXN_471z4QQdrw5oaqTQW3pBu8atfA7MVPu7fo='
];

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const body = document.querySelector('body');
let count = 0;

leftArrow.addEventListener('click', () => {
    console.log('left');
    if(count == 0) 
        count = 3;
    else 
        count--;

    body.style = `background-image: url(${links[count]})`;
});

rightArrow.addEventListener('click', () => {
    if(count == 3) 
        count = 0;
    else 
        count++;

    body.style = `background-image: url(${links[count]})`;
});
