import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthCtx from "../../context/AuthCtx.js"
import SearchBar from "../pages/SearchBar.js";
import { logout } from '../../services/Api';

const Header = ({ onLogout }) => {

    const userInfo = useContext(AuthCtx);

    let guestNav = <div id="guest">
        <Link className="button btn-header" to="/login">Login</Link>
        <Link className="button btn-header" to="/register">Register</Link>
    </div>

    let userNav = <div id="user">
        <span id="user__info">Welcome, {userInfo.user.email}</span>
        <Link className="button btn-header" to="/catalog">Catalogue</Link>
        <Link className="button btn-header" to="/create">Add</Link>
        <Link className="button btn-header" onClick={logout()} to="/">Logout</Link>
    </div>

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    {userInfo.user.isAuthenticated || !sessionStorage.length == 0
                        ? <Link className="button" to="/dashboard">Dashboard</Link>
                        : <Link className="button" to="/login">Dashboard</Link>}
                    {userInfo.user.isAuthenticated || !sessionStorage.length == 0
                        ? userNav
                        : guestNav
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;