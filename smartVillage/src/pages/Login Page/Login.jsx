import './Login.css'
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false)

    const [nama, setNama] = React.useState('')
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        Axios.post('http://localhost:3001/login', {
            nama: nama, 
            password: password
        }).then((response)=>{
            if(response.data.message){
                alert(response.data.message)
            } else {
                setIsLogin(!isLogin)
                // updateLoginStatus(isLogin)
                navigate('/')
            }
        })
    }


    return (
        <div className='body'>
            
            <div className="wrapper-login">
                <form>
                    <h1>Login</h1>

                    {/* Input untuk username */}
                    <div className="input-box">
                        <input type="text" placeholder="Username" required onChange={(event) => setNama(event.target.value)}/>
                    </div>

                    {/* Input untuk password */}
                    <div className="input-box">
                        <input type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)}/>
                    </div>

                    {/* Remember me dan Forget Password */}
                    {/* <div className="remember-forget">
                        <a href="#">Forget Password</a>
                    </div> */}

                    {/* Tombol Login */}
                    <button type="submit" form="loginForm" className="btn" onClick={handleLogin}>
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