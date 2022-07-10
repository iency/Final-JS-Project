// API: https://www.omdbapi.com/?i=tt3896198&apikey=2df1f98&
// API 2: https://www.omdbapi.com/?apikey=2df1f98&s=fast

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=2df1f98&s=fast")
    const moviesData = await movies.json();
    console.log(
        moviesData.Search.map(
            (movie) => `<div class="movie-card">
        <div class="movie-card_container">
            <h3>Title</h3>
            <p><b>Year:</b> 2013</p>
            <p><b>imdbID:</b> tt1905041</p>
            <p><b>Type:</b> movie</p>
            <p><b>Poster:</b> <img src="https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg" class="poster-img" alt=""></p>
        </div>
    </div>`
            )
            .join("")
        )
}

main();