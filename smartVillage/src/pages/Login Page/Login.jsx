import './Login.css'

const Login = () => {
    return (
        <div className='body'>
            
            <div className="wrapper-login">
                <form action="">
                    <h1>Login</h1>

                    {/* Input untuk username */}
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                    </div>

                    {/* Input untuk password */}
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>

                    {/* Remember me dan Forget Password */}
                    {/* <div className="remember-forget">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forget Password</a>
                    </div> */}

                    {/* Tombol Login */}
                    <button type="submit" className="btn">
                        Login
                    </button>

                    {/* Link untuk register */}
                    {/* <div className="register-link">
                        <p>
                            Sudah Punya Akun? <a href="#">Register</a>
                        </p>
                    </div> */}
                </form>
            </div>
        </div>
    );
}

export default Login;