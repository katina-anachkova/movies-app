import { useNavigate } from "react-router";
import { register } from "../services/Api";

const Register = ({ onRegister }) => {

    let navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('confirm-pass').trim();
        const isAuthenticated = true;

        if (email == '' || password == '' || repass == '') {
            return alert('All fields ar required!');
        }

        if (password !== repass) {
            return alert(`Passwords must match!`);
        }

        register(email, password);
        onRegister({ email, password, isAuthenticated });
        navigate('/');
    }


    return (
        <div class="form-holder">
            <div class="form-content">
                <div class="form-items">
                    <h3>Register</h3>
                    <form class="requires-validation" onsubmit={onRegisterHandler}>
                        <input class="form-control" type="email" id="email" name="email" placeholder="E-mail" required />
                        <div class="invalid-feedback">
                            Email is required!
                        </div>
                        <input class="form-control" type="password" id="password" name="password" placeholder="Password" required />
                        <div class="invalid-feedback">
                            Password is required!
                        </div>
                        <input class="form-control" type="password" id="repass" name="repass" placeholder="Repeat password" required />
                        <div class="invalid-feedback">
                            Passwords must match!
                        </div>
                        <button id="submit" type="submit" class="button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Register;