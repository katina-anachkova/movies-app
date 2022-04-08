import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthCtx from "../context/AuthCtx";
import { logout } from "../services/Api";
 
const Header = ({isAuthenticated}) => {
    const userInfo = useContext(AuthCtx);
    // console.log(userInfo)
    let guestNav = <div id="guest">
        <Link className="button" to="/login">Login</Link>
        <Link className="button" to="/register">Register</Link>
    </div>

    let userNav = <div id="user">
        <span id="user__info">Welcome, {userInfo.user.email}</span>
        <Link className="button" to="/my-movies">My Movies</Link>
        <Link className="button" to="/create">Add new</Link>
        <Link className="button" onClick={logout} to="/">Logout</Link>
    </div>

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link className="button" to="/">Home</Link>
                    { userInfo.user.isAuthenticated
                        ? userNav
                        : guestNav
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;