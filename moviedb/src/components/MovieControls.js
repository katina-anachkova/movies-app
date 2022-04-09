import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getUserData } from '../util';
import * as movieService from '../services/MovieService';

const MovieDetailsControls = () => {
    const [movie, setMovie] = useState({});

    const navigate = useNavigate();
    const params = useParams();

    const userData = getUserData();
    const isOwner = userData && userData.id == movie.owner;

    useEffect(() => {
        movieService.getOne(params.id)
            .then(movie => {
                setMovie(movie);
            });
    }, [])

    const onDelete = () => {
        setMovie(movieService.getOne(params.id));
        movieService.deleteMovie(params.id)
            // .then(navigate('/'));
    }

    return (
        isOwner
            ? <><Link to={`/edit/${movie._id}`} className="button controls">Edit</Link>
                <Link to="/" onClick={onDelete} className="button controls">Delete</Link>
            </>
            : null
    );
}

export default MovieDetailsControls;

