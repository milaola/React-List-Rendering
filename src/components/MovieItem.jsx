function MovieItem({movie}) {
  return (
    <div>
        <h2>{movie.title} </h2>
        <p> Year : {movie.year}</p>
        <p> Review: {movie.review}</p>
    </div>
  )
}

export default MovieItem