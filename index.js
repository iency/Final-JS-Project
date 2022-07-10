// API: https://www.omdbapi.com/?apikey=2df1f98
// API 2: https://www.omdbapi.com/?apikey=2df1f98&s=fast
// Search by imdbID: https://www.omdbapi.com/?i=tt1905041&apikey=2df1f98

const movieListEl = document.querySelector('.movie-list');
const val = document.querySelector('input').value

async function search(event) {
    const val = document.querySelector('input').value
    if (event.keyCode === 13) {
        const moviesPromise = await fetch(`https://www.omdbapi.com/?apikey=2df1f98&s=${val}`)
        const moviesData = await moviesPromise.json()
        const moviesDataNew = moviesData.Search
        movieListEl.innerHTML = moviesData.Search.map(movie => renderMovies(movie)).join('')
    }
}

async function searchWithButton() {
    const val = document.querySelector('input').value
    const moviesPromise = await fetch(`https://www.omdbapi.com/?apikey=2df1f98&s=${val}`)
        const moviesData = await moviesPromise.json()
        const moviesDataNew = moviesData.Search
        movieListEl.innerHTML = moviesData.Search.map(movie => renderMovies(movie)).join('')
}

async function main() {
    const moviesPromise = await fetch(`https://www.omdbapi.com/?apikey=2df1f98&s=${val}`);
    const moviesData = await moviesPromise.json();
    const moviesDataNew = moviesData.Search

    movieListEl.innerHTML = moviesData.Search.map(movie => renderMovies(movie)).join("");
}

main();

function SearchResults(event) {
    const SearchResults = document.querySelector('.search__text--black')
    if (event.keyCode === 13) {
        SearchResults = SearchResults + val
    }
}

function renderMovies(movie) {
    return `<div class="movie-card">
    <div class="movie-card_container">
        <div class="h3-wrapper"><h3>${movie.Title}</h3></div>
        <div class="card_description">
            <div class="card-left">
                <p class="margin"><b>Year:</b> ${movie.Year}</p>
                <p class="margin"><b>imdbID:</b> ${movie.imdbID}</p>
                <p class="margin"><b>Type:</b> ${movie.Type}</p>
                <a href="/movies.html">
                    <button class="info-btn">More Info</button>
                </a>
            </div>
            <figure class="poster-img_wrapper"> 
                <img src="${movie.Poster}" class="poster-img" target="_blank">
            </figure>
        </div>  
    </div>
</div>`;
}