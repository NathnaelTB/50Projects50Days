const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjU5MjcwZmQzZDE4ZjRjNTY2NWViNzJkMjljZWM4YSIsInN1YiI6IjY1ODQyZDIyZTgxMzFkNDFmMmE0ZDQ2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EUPJpz4KDmYj9QEkf8VqyFSlITY8R968YG8QafCQYIo'
    }
  };

const container = document.querySelector('.container');
const baseURL = 'https://image.tmdb.org/t/p/w500/';
  
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => response.results)
    .then(response => response.forEach(item => {
        //creating elements
        let movie_contianer = document.createElement('div'); // div for the whole card
        movie_contianer.className = 'movie-container';

        let data_container = document.createElement('div'); // div for the title and rating
        data_container.className = 'data-container';

        let movie_img = document.createElement('img');
        movie_img.setAttribute('src', `${baseURL + item.poster_path}`);
        movie_img.className = 'movie-img';

        let movie_title = document.createElement('h3');
        movie_title.className = 'movie-title';
        movie_title.textContent = item.original_title;

        let rating_div = document.createElement('div'); // div for the rating
        rating_div.className = 'rating-div';

        let movie_rating = document.createElement('h4');
        movie_rating.textContent = item.vote_average.toFixed(1);
        movie_rating.style.color = colorize(item.vote_average.toFixed(1));

        let overview_container = document.createElement('div');
        overview_container.className = 'overview-container';

        let overview_title = document.createElement('h3');
        overview_title.textContent = 'Overview';

        let overview = document.createElement('p')
        overview.textContent = item.overview;

        //appending the overview
        overview_container.appendChild(overview_title);
        overview_container.appendChild(overview);

        //appending the elements
        rating_div.appendChild(movie_rating);

        data_container.appendChild(movie_title);
        data_container.appendChild(rating_div);

        movie_contianer.appendChild(movie_img);
        movie_contianer.appendChild(data_container);
        movie_contianer .appendChild(overview_container);

        movie_contianer.addEventListener('mouseenter', () => {
            overview_container.classList.add('overview-container-display');
        });

        movie_contianer.addEventListener('mouseleave', () => {
            overview_container.classList.remove('overview-container-display');
        });

        container.appendChild(movie_contianer);
    }))
    .catch(err => console.error(err))


    // colorizing function
    function colorize(rating) {
        if(rating < 5)
            return '#ff4c4c';
        else if(rating > 4 && rating < 7)
            return 'yellow';
        else 
            return 'lime';
    }