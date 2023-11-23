document.querySelector('.applause').addEventListener('click', playSound);
document.querySelector('.boo').addEventListener('click', playSound);
document.querySelector('.gasp').addEventListener('click', playSound);
document.querySelector('.tada').addEventListener('click', playSound);
document.querySelector('.victory').addEventListener('click', playSound);
document.querySelector('.wrong').addEventListener('click', playSound);

const applause = document.getElementById('applause');
const boo = document.getElementById('boo');
const gasp = document.getElementById('gasp');
const tada = document.getElementById('tada');
const victory = document.getElementById('victory');
const wrong = document.getElementById('wrong');

function playSound(event) {
    if(event.target.classList.contains('applause'))
        applause.play();
    else if(event.target.classList.contains('boo'))
        boo.play();
    else if(event.target.classList.contains('gasp'))
        gasp.play();
    else if(event.target.classList.contains('tada'))
        tada.play();
    else if(event.target.classList.contains('victory'))
        victory.play();
    else if(event.target.classList.contains('wrong'))
        wrong.play();
}
