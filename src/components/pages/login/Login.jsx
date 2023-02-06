import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/gifs/animated-rabbit.gif';
import { login } from '../../../controllers/userController';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container col h-100">
            <div className='row d-flex justify-content-center'>
                <img src={logo} alt="loading..." style={{ width: "10%", height: "10%" }} />
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className='col-4'>
                    <div className="card p-4">
                        <div className="card-header header">
                            <h2>Log In</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mt-2">
                                    <FontAwesomeIcon icon={faUser} size='1x' color='pink' />
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="EmailInput"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <FontAwesomeIcon icon={faLock} size='1x' color='pink' />
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <button type="submit" className="col-12 btn btn-primary app-button mt-4">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;