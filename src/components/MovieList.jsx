import React from 'react'

function MovieList() {
    const movies = [
        {
            id: 1,
            title: PrimeTime,
            year: 2026,
            review: "somebody get these PREDATORS out of here"
        },
        {
            id: 2,
            title: ResidentEvil,
            year: 2026,
            review: "the backstory of that one random dead npc you find in every resident evil game"
        },
        {
            id: 3,
            title:TheOdyssey,
            year: 2026,
            review: "RIP odysseus you definitely would've loved google maps"


        },

        {
            id: 4,
            title: TheLoveHypothesis,
            year: 2026,
            review: "the love hypothesis crew could do interstellar but Christopher Nolan could never do the love hypothesis"
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