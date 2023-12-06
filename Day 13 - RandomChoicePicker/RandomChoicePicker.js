//getting the elements by ID and class
const choiceInput = document.getElementById('choiceInput');
const choices = document.querySelector('.choices');

choiceInput.addEventListener('keyup', displayText); // listens when key is up

// displays the input to the choices div
function displayText(event) {
    const word = event.target.value.split(',');

    if(event.keyCode === 13) {
        shuffle(word);
        chooseRandomly(word);
    }
    
    else {
        let wordHTML = '';
        word.forEach((item, index) => {
            wordHTML += `<h3 class=${index}>` + item  + `</h3>`;
        })
        choices.innerHTML = wordHTML;
    }
}

function chooseRandomly(word) {
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * word.length) // generates integer between 0 and word.length
        choices.childNodes[randomIndex].classList.add('chosen');
    }, 2000);
    
}

//shuffles choice list using random numbers
function removeChosen(index) {
    setTimeout(() => {
        choices.childNodes[index].classList.remove('chosen');
    }, 100);
 }

function shuffle(word) {
    let count = 0;
    const interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * word.length);
        choices.childNodes[randomIndex].classList.add('chosen');
        removeChosen(randomIndex);
        count += 1;
        if(count === 10)
        clearInterval(interval);
    }, 200);
 }

