const url = 'https://icanhazdadjoke.com/';

function clickHandler() {
    fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').textContent = data.joke;
        })
}




    


