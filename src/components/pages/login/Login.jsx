import React, { useState } from 'react';
import { login } from '../../../controllers/userController';
import logo from '../../../assets/gifs/animated-rabbit.gif';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password).then((result) => {
            console.log(result);
        });
    }

    return (
        <div className="container col h-100">
            <div className='row d-flex justify-content-center'>
                <img src={logo} alt="loading..." style={{ width: "10%", height: "10%" }}/>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-6 card p-4">
                    <form id="loginform" onSubmit={handleSubmit}>
                        <div className="form-group mt-2">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="EmailInput"
                                name="EmailInput"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary app-button mt-4">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;