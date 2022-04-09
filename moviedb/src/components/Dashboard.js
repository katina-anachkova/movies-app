import { useState, useEffect } from "react";
import FavouriteTemplate from "./FavouriteTemplate";
import * as favouriteService from '../services/FavouritesService';
import { getUserData } from "../util";

const Dashboard = ({user}) => {
    let userData = getUserData();

    const userId = userData.id;

    const [movies, setMovies] = useState([]);

    useEffect(() => {//////TODO -> FIX - renders all favourites
        favouriteService.getFavouritesByUser(userId)
            .then((movies) => {
                setMovies(movies);
            }).then(result => console.log(result))
    }, []);

    return (
        <>
            <section id="hero"></section>
            <section >
                {movies.length > 0
                    ? <ul className="flex__list">
                        {movies.map(x => <FavouriteTemplate key={x._id} movie={x} />)}
                    </ul>
                    : <p className="flex__list">No movies in database!</p>
                }
            </section>
        </>
    );
}

export default Dashboard;