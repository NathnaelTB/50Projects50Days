const icon = document.querySelectorAll('.icon');

icon.forEach(item => {
    item.addEventListener('click', (event) => {
        const ans = event.target.parentElement.parentElement.nextElementSibling;
        const question = event.target.parentElement.parentElement.parentElement;
        const eventClass = event.target.classList;

        if(eventClass.contains('fa-angle-down')) {
            eventClass.remove('fa-angle-down');
            eventClass.add('fa-circle-xmark');
            ans.style.display = 'block';
            question.classList.add('question-container-after');
        }

        else if(eventClass.contains('fa-circle-xmark')) {
            eventClass.remove('fa-circle-xmark');
            eventClass.add('fa-angle-down');
            ans.style.display = 'none';
            question.classList.remove('question-container-after');
        }
    })
})