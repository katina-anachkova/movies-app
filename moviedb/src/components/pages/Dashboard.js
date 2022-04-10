import { useState, useEffect } from "react";
import FavouriteTemplate from "./FavouriteTemplate";
import * as favouriteService from '../../services/FavouritesService';
import { getUserData } from "../../util";
import * as userService from '../../services/users';

const Dashboard = () => {
    let userData = getUserData();

    const userId = userData.id;

    const [movies, setMovies] = useState([]);
    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     favouriteService.getAllFavs()
    //         .then((movies) => {
    //             setMovies(movies);
    //         })
    // }, []);

    // const favMovies = movies.filter(movie => movie.owner === userId)

    useEffect(() => {
        userService.getAllUsers()
            .then(users => {
                setUsers(users);
                console.log(users)
            })
    }, []);

    const actionUser = users.filter(user => user._id === userId);
    console.log(actionUser) // ok
    // const favMovies = actionUser[0]['favMovies'];

    return (
        <>
            <section id="hero"></section>
            <section >
                {movies.length > 0
                    ? <ul className="flex__list">
                        {/* {favMovies.map(x => <FavouriteTemplate key={x._id} movie={x} />)} */}
                    </ul>
                    : <p className="flex__list">No favourite movies yet!</p>
                }
            </section>
        </>
    );
}

export default Dashboard;