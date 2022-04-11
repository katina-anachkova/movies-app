import { Link } from "react-router-dom";

const MovieTemplate = ({ movie }) => {
    return (
        <li className="flex__item">
            <h3>{movie.title}</h3>
            <p className="img"><img alt="movie cover"
                src={movie.image} />
            </p>
            { sessionStorage.length > 0
            ? <Link className="button" to={`/details/${movie._id}`}>Details</Link>
            : <Link className="button" to={`/login`}>Details</Link>
            }
        </li>
    );
}

export default MovieTemplate;

