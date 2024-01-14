import PropTypes from 'prop-types';

export const Case = ({ movieCast }) => {
  return (
    <>
      <hr />
      <ul>
        {movieCast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png'
                }
                alt={name}
                width="100"
              />
              <h4>{name}</h4>
              <h4>{character}</h4>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Case.propTypes = {
  movieCast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
