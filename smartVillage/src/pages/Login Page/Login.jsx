import './Login.css'
import React, { useState } from 'react';
import { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = React.useState([])

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('');

    const handleOnclick = () => {
        Axios.get('http://localhost:3001/login').then((response) => {
            console.info("succes")    
            setUserData(response.data)
        })
        
    }

    return (
        <div className='body'>
            
            <div className="wrapper-login">
                <form>
                    <h1>Login</h1>

                    {/* Input untuk username */}
                    <div className="input-box">
                        <input type="text" placeholder="Username" required onChange={(event) => setUsername(event.target.value)}/>
                    </div>

                    {/* Input untuk password */}
                    <div className="input-box">
                        <input type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)}/>
                    </div>

                    {/* Remember me dan Forget Password */}
                    <div className="remember-forget">
                        {/* <label>
                            <input type="checkbox" />
                            Remember me
                        </label> */}
                        <a href="#">Forget Password</a>
                    </div>

                    {/* Tombol Login */}
                    <button type="submit" className="btn" onClick={handleOnclick}>
                        Login
                    </button>

                    {/* Link untuk register */}
                    <div className="register-link">
                        <p>
                            Belum Punya Akun? <a href="/register">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;