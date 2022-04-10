import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getUserData } from '../../util';
import * as movieService from '../../services/MovieService';

const MovieDetailsControls = () => {
    const [movie, setMovie] = useState({});

    const params = useParams();

    const userData = getUserData();
   
    const isOwner = userData && userData.id == movie._ownerId;

    useEffect(() => {
        movieService.getOne(params.id)
            .then(movie => {
                setMovie(movie);
            });
    }, [])

    const onDelete = () => {
        setMovie(movieService.getOne(params.id));
        movieService.deleteMovie(params.id)
    }

    return (
        isOwner
            ? <>
                {/* <Link to={`/edit/${movie._id}`} className="button controls">Edit</Link> */}
                <Link to="/" onClick={onDelete} className="button controls">Delete</Link>
            </>
            : null
                   
                   

    );
}

export default MovieDetailsControls;

