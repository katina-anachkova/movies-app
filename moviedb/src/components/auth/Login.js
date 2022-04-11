import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../../services/Api";

const Login = ({ onLogin }) => {

    let navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const isAuthenticated = true;

        if (email == '' || password == '') {
            return alert('All fields are required');
        }

        login(email, password);

        onLogin({ email, password, isAuthenticated });

        setTimeout(() => {
            if (sessionStorage.length > 0) {
                navigate('/');
            }
        }, 1500);

    }

    return (
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Login</h3>
                    <form className="requires-validation" onSubmit={onLoginHandler}>
                        <input className="form-control" type="email" name="email" defaultValue="E-mail" required />
                    
                        <input className="form-control" type="password" name="password" id="password" defaultValue="Password" required />
                        
                        <button id="submit" type="submit" className="button" value="login">Login</button>
                    <span id="have__account">If you don't have profile click <Link to="/register">here</Link></span>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;