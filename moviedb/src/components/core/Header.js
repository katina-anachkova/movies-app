import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthCtx from "../../context/AuthCtx.js"
const Header = ({ onLogout }) => {

    const userInfo = useContext(AuthCtx);
        
    let guestNav = <div id="guest">
        <Link className="button" to="/login">Login</Link>
        <Link className="button" to="/register">Register</Link>
    </div>

    let userNav = <div id="user">
        <span id="user__info">Welcome, {userInfo.user.email}</span>
        <Link className="button" to="/">Catalogue</Link>
        <Link className="button" to="/create">Add</Link>
        <Link className="button" onClick={onLogout()} to="/">Logout</Link>
    </div>

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link className="button" to="/dashboard">Dashboard</Link>
                    {userInfo.user.isAuthenticated
                        ? userNav
                        : guestNav
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;