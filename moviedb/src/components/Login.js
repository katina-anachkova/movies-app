import { useNavigate } from "react-router";
import { login } from "../services/Api";


const Login = ({ onLogin }) => {

    let navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const isAuthenticated = true;

        if (email == '' || password == '') {
            return alert('All fields ar required');
        }

        login(email, password);

        onLogin({ email, password, isAuthenticated });

        if (sessionStorage.length > 0) {
            navigate('/');
        }

    }
    
    return (
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Login</h3>
                    <form className="requires-validation" onSubmit={onLoginHandler}>
                        <input className="form-control" type="email" name="email" placeholder="E-mail" required />
                        {/* <div className="invalid-feedback">
                            Email is required!
                        </div> */}
                        <input className="form-control" type="password" name="password" id="password" placeholder="Password" required />
                        {/* <div className="invalid-feedback">
                            Password is required!
                        </div> */}
                        <button id="submit" type="submit" className="button" value="login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;