import { useNavigate } from "react-router";
import { register } from "../services/Api";

const Register = ({ onRegister }) => {

    let navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData)
        const email = formData.get('email')
        const password = formData.get('password')
        const repass = formData.get('repass')
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
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Register</h3>
                    <form className="requires-validation" onSubmit={onRegisterHandler}>
                        <input className="form-control" type="email" id="email" name="email"  required />
                        {/* <div className="invalid-feedback">
                            Email is required!
                        </div> */}
                        <input className="form-control" type="password" id="password" name="password"  required />
                        {/* <div className="invalid-feedback">
                            Password is required!
                        </div> */}
                        <input className="form-control" type="password" id="repass" name="repass" required />
                        {/* <div className="invalid-feedback">
                            Passwords must match!
                        </div> */}
                        <button id="submit" type="submit" className="button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Register;