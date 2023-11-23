import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import NavbarList from "./NavbarList";
// import { useState } from "react";
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();

    // const [loginStatus, setLoginStatus] = React.useState(false)
    // const validateLogin = (newValue) => {
    //     setLoginStatus(newValue)
    // }

    return (
        <div className="z-10 fixed top-0 w-full h-16 bg-[#8DDFCB] flex justify-between items-center shadow-lg px-10">
            <div className="w-12 h-12">
                <img src={logo}/>
            </div>
            <div>
                <ul className="flex gap-12">
                    <li>
                        <NavbarList name="Home" link="/"/>
                    </li>
                    <li>
                        <NavbarList name="Toko Online"/>
                    </li>
                    <li>
                        <NavbarList name="Berita" link="/announcement"/>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-5 items-center justify-center">
                    {/* {loginStatus&( */}

                        <li>
                            <a href="/login" className="text-center ">
                                LOGIN
                            </a>
                        </li>
                    {/* )} */}
                    <li>
                        <button className="bg-slate-100 p-3 rounded-full" onClick={() => navigate("/register")}>DAFTAR</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;