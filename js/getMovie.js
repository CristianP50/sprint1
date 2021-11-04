const trailerI = 'https://api.themoviedb.org/3/movie/';
const trailerF = '/videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US';
const defaultURL = 'https://www.youtube.com/embed/';
const API_TOP = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=';
const MENOS_POP = '/discover/movie?sort_by=popularity.asc';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=';
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById('contentMain');

const trailer = async (id) => {
    const response = await fetch(trailerI + id + trailerF);
    const datos = await response.json();
    const { results } = datos;
    const key = results[0].key;
    return key
}

const getMovie = async(url) => {
    try{
    const peticion = await fetch(url);
    const pelicula = await peticion.json();
    const data =  pelicula.results;
    console.log(data);
    }catch (error){
        alert(error);
    }
}

function showMovie(movie) {
    
  movie.forEach(async(movie) => {
    const{id,title,poster_path,vote_average,overview,release_date} = movie
    const trailerWait = await trailer(id);
    const movieE1 = document.createElement('div');
    
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
                <div id="contentBtn">
                    <button linkYputube="${defaultURL + trailerWait}" overview="${overview}" titulo="${title}" identificador="${id}" type="button" class="btn btn-trailer btn-outline">Watch Trailer</button>
                </div>
            </div>
        </div>
    </div>
    ` 
    innerHTML = '';
    main.appendChild(movieE1); 
  });
}

// ---------------------------------busqueda---------------------------
const btnSearch = document.getElementById('btnSearch');
const busqueda = document.getElementById('search');

btnSearch.addEventListener('click', async e => {
    let busquedaValue = busqueda.value;
    let link = SEARCH_URL + busquedaValue + '"';
    let respuesta = await fetch(link);
    let data = await respuesta.json();
    const { results } = data;
    main.innerHTML = "";
    showMovie(results)
    e.preventDefault();
})
async function fetchMetaData() {
    let allData = [];
    let morePagesAvailable = true;
    let currentPage = 0;

    while (morePagesAvailable) {
        currentPage++;
        const response = await fetch(`${API_URL}${currentPage}`)
        let { results } = await response.json();
        results.forEach(e => allData.unshift(e));
        morePagesAvailable = currentPage < total_pages;
    }
    return allData;
}

// ----------------------------valoración---------------------------------------
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
// ----------------------------------------modal---------------------

const btnOpenTrailer = document.querySelector('.btn-trailer');
const detailsPage = document.querySelector('#contentTrailer');
const btnClose = document.getElementById('btnCerrar');

btnClose.addEventListener('click', ()=>{
    detailsPage.style.visibility = 'hidden'
});

main.addEventListener('click', async(e) =>{
    e.preventDefault(); 
    if(e.target.matches('.btn-trailer')){
        detailsPage.style.visibility = 'visible'
        document.querySelector('.info-pelicula').textContent = e.target.getAttribute('overview');
        document.querySelector('#trailerWindow').src = e.target.getAttribute('linkYputube');
    }
  })


// --------------------scroll infinito-----------------------
let paginas = 1;
const onScroll = async () => {
    if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
        paginas++;
        const returns = await fetch(`${API_URL}${paginas}`)
        let { results } = await returns.json();
        showMovie(results);
    }
}


document.addEventListener('DOMContentLoaded', (e) => {
    getMovie(data);
});

window.addEventListener('scroll', onScroll)


getClassByRate();
getMovie(API_URL);


