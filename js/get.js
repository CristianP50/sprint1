const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('contentMain');


const getMovie = async(url) => {
    try{
    const peticion = await fetch(url);
    const pelicula = await peticion.json();
    const data =  pelicula.results;
    console.log(data);
    showMovie(data);
    }catch (error){
        alert(error);
    }
}

function showMovie(movie) {

  movie.forEach(movie => {
    const{title,poster_path,vote_average,overview,release_date} = movie
    const movieE1 = document.createElement('div');
    movieE1.classList.add('movie');

    movieE1.innerHTML = ` 
    <div class="movie-card" style="background-image: url(${IMG_PATH + poster_path});">
        <div class="color-overlay">
            <div class="movie-share">
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="movie-content">
                <div class="movie-header">
                    <h1 class="movie-title">${title}</h1>
                    <h4 class="movie-info">${release_date}</h4>
                </div>
                <a id="btnTrailer" class="btn btn-outline">Watch Trailer</a>
            </div>
        </div>
    </div>
    ` 
    innerHTML = '';
    main.appendChild(movieE1);
    
  });
}

function getClassByRate(vote) {
    let valoracion = document.getElementById('valoracion')
    if (vote >= 8.0) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

getClassByRate();
getMovie(API_URL);


