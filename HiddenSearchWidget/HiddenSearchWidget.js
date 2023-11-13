const input = document.getElementsByTagName('input')[0];
let clickCount = 1;

const hideUnhide = () => {
    if(clickCount % 2 === 0) {
        input.classList.remove('display');
        clickCount += 1;
        console.log(clickCount);
    }
    else {
        input.classList.add('display');
        clickCount += 1;
        console.log(clickCount);
    }
}