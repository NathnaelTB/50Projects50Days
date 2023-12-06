//getting the elements by ID and class
const choiceInput = document.getElementById('choiceInput');
const choices = document.querySelector('.choices');

choiceInput.addEventListener('keyup', displayText); // listens when key is up

// displays the input to the choices div
function displayText(event) {
    const word = event.target.value.split(',');

    if(event.keyCode === 13) {
        console.log('enter is pressed')
    }
    
    else {
        let wordHTML = '';
        word.forEach(item => {
            wordHTML += `<h3>${item}</h3>`;
        })
        choices.innerHTML = wordHTML;
    }
}