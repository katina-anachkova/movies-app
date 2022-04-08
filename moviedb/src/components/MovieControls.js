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
    const isOwner = userData && userData.id == movie._ownerId;

    useEffect(() => {
        movieService.getOne(params.movieId)
            .then(movie => {
                setMovie(movie);
            });
    }, [])

    const onDelete = () => {
        setMovie(movieService.getOne(params.movieId));
        movieService.deleteMovie(params.movieId)
            .then(navigate.replace('/'));
    }

    return (
        isOwner
            ? <><Link to={`/edit/${movie._id}`} className="button">Edit</Link>
                <Link to="#" onClick={onDelete} className="button">Delete</Link>
            </>
            : null
    );
}

export default MovieDetailsControls;

