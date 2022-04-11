import { useState, useEffect } from "react";
import FavouriteTemplate from "./FavouriteTemplate";
import { getUserData } from "../../util";
import * as userService from '../../services/users';

const Dashboard = () => {
    let userData = getUserData();

    const userId = userData.id;

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(users => {
                setUsers(users);// ok
                console.log(users)
            })
    }, []);

    let actionUser = [];
    let favMovies = [];

    setTimeout(() => {
        actionUser = users.filter(user => user._id === userId);// ok
        favMovies = actionUser[0]['favMovies'];
        
    }, 5000);

    console.log(favMovies, "favMovies");
    if(actionUser !== null || actionUser !== undefined || actionUser.length > 0){
        console.log(actionUser, "action")
        favMovies = actionUser[0]['favMovies'];

    }

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