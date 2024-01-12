export const MovieDetails = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  return (
    <div>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png'
          }
          alt={title}
          width="200"
        />
        <div>
          <h2>{title}</h2>
          <p>User Score:{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres?.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>

      <h3>Additional information</h3>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
    </div>
  );
};

