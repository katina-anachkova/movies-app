import { useState, useEffect } from "react";
import FavouriteTemplate from "./FavouriteTemplate";
import { getUserData } from "../../util";
import * as userService from '../../services/users';
import { avatarClasses } from "@mui/material";

const Dashboard = () => {
    let userData = getUserData();

    const userId = userData.id;

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(users => {
                setUsers(users);// ok
                console.log(users)
            });
    }, []);

    const actionUser = users.filter(user => user._id === userId);// ok -> logging all users
    console.log(actionUser)//ok -> logging the current user
    let favMovies = actionUser[0]['favMovies'];
    console.log(favMovies)// ok -> logging all favourite movies of the current user

    return (
        <>
            <section id="hero"></section>
            <section >
                {favMovies.length > 0
                    ? <ul className="flex__list">
                        {favMovies.map(x => <FavouriteTemplate key={x._id} movie={x} />)}
                    </ul>
                    : <p className="flex__list">No favourite movies yet!</p>
                }
            </section>
        </>
    );
}

export default Dashboard;