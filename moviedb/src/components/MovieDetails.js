import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as movieService from '../services/MovieService.js';
import MovieControls from "./MovieControls";
import { getUserData } from '../util.js';
import { useNavigate } from 'react-router';

const MovieDetails = () => {

    const userData = getUserData();
    const navigate = useNavigate();
    const params = useParams();

    const [movie, setMovie] = useState({});
    // const [likes, setLikes] = useState(0);
    // const [hasLiked, setHasLiked] = useState(0);

    const isOwner = userData && userData.id == movie.owner;
    // const showLikeButton = userData != null && isOwner == false && hasLiked == false;
    const movieId = params.id;

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movie => {
                setMovie(movie);
            });
    }, []);//likes

    // useEffect(() => {
    //     movieService.getLikesByMovieId(params.id)
    //         .then(likes => {
    //             setLikes(likes);
    //         });
    // }, [likes]);

    // useEffect(() => {
    //     if (userData != null) {
    //         movieService.getMyLikesByMovieId(params.id, userData.id)
    //             .then(like => {
    //                 setHasLiked(like);
    //             });
    //     } else {
    //         return
    //     }
    // }, [likes]);

    async function onLike() {
        await movieService.likeMovie(params.id);
        navigate(`/details/${movie._id}`);
    }

    return (
            <section id="details__page" className="details">
                <div className="movie__information">
                    <img className="movie__image" src={movie.image} />

                    <div className="actions">
                        <MovieControls />
                        {/* {showLikeButton
                            ? <button className="button" onClick={onLike} to="#">Like</button>
                            : null
                        } */}
                        {/* <div className="likes">
                            <img className="hearts" src="/images/heart.png" />
                            <span id="total-likes">Likes: {likes}</span>
                        </div> */}
                    </div>
                </div>
                <div className="movie__description">
                    <h3>{movie.title}</h3>
                    <h3>Description:</h3>
                    <p>{movie.description}</p>
                </div>
            </section>
    );
}

export default MovieDetails;