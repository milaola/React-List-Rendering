import MovieItem from "./MovieItem";


function MovieList() {
    const movies = [
        {
            id: 1,
            title: "PrimeTime",
            year: 2026,
            review: "somebody get these PREDATORS out of here"
        },
        {
            id: 2,
            title: "Resident Evil",
            year: 2026,
            review: "the backstory of that one random npc you find in every resident evil game"
        },
        {
            id: 3,
            title: "The Odyssey",
            year: 2026,
            review: "RIP odysseus you definitely would've loved google maps"


        },

        {
            id: 4,
            title: "The Love Hypothesis",
            year: 2026,
            review: "the love hypothesis crew could do interstellar but Christopher Nolan could never do the love hypothesis"
        },

        {
            id: 5,
            title: "La La Land",
            year: 2016,
            review: "Boring Boring Boring"
        },

        {
            id: 6,
            title: "Sinners",
            year: 2025,
            review: "The kind of movie that reminds you why you fell in love with movies in the first place"
        },




    ]

    return (
        <div>
            <h1> Movie List</h1>
            {movies.map((movie) =>
            (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList