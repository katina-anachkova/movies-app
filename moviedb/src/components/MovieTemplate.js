import { Link } from "react-router-dom";

const MovieTemplate = ({ movie }) => {
    return (
        <li className="flex__item">
            <h3>{movie.title}</h3>
            <p className="img"><img alt="movie cover"
                src={movie.image} />
            </p>
            <Link className="button" to="/details">Details</Link>
        </li>
    );
}

export default MovieTemplate;

