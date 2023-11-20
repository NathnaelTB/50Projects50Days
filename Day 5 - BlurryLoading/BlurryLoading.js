const picture = document.getElementsByClassName("picture")[0];
const percentage = document.getElementsByClassName("percentage")[0];

let num = 0;

const unblur = () => {
    picture.classList.add('unblur');
    percentage.classList.add('blurPercentage');
    setInterval(loader, 25);
}

function loader() {
    if(num === 100){
        clearInterval();
        return;
    }
    num += 1;
    percentage.innerHTML = num + '%';
}
