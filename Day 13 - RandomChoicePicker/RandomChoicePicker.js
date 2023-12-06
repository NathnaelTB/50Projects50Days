//getting the elements by ID and class
const choiceInput = document.getElementById('choiceInput');
const choices = document.querySelector('.choices');

choiceInput.addEventListener('keyup', displayText); // listens when key is up

// displays the input to the choices div
function displayText(event) {
    const word = event.target.value.split(',');

    if(event.keyCode === 13) {
        chooseRandomly(word);
    }
    
    else {
        let wordHTML = '';
        word.forEach((item, index) => {
            wordHTML += `<h3 id=${index}>` + item  + `</h3>`;
        })
        choices.innerHTML = wordHTML;
    }
}

function chooseRandomly(word) {
    // shuffle(word);
    let randomIndex = Math.floor(Math.random() * word.length) // generates integer between 0 and word.length
    choices.childNodes[randomIndex].classList.add('chosen');
}

// function shuffle(word) {

//  }