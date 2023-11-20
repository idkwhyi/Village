import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import NavbarList from "./NavbarList";
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 w-full h-16 bg-[#8DDFCB] flex justify-between items-center shadow-lg px-10">
            <div className="w-12 h-12">
                <img src={logo}/>
            </div>
            <div>
                <ul className="flex gap-12">
                    <li>
                        <NavbarList name="Home" link="/"/>
                    </li>
                    <li>
                        <NavbarList name="Market" link="/market"/>
                    </li>
                    <li>
                        <NavbarList name="Berita" link="/announcement"/>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-5 items-center justify-center">
                    <li>
                        <a href="/login" className="text-center ">
                            LOGIN
                        </a>
                    </li>
                    <li>
                        <button className="bg-slate-100 p-3 rounded-full" onClick={() => navigate("/register")}>DAFTAR</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
{/* <button 
    onClick={() => navigate("/market")} 
    className={`underline-container ${isHovered ? 'underline-hovered' : ''}`}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
>Market</button> */}

// <!-- HTML !-->
// <button class="button-48" role="button"><span class="text">Button 48</span></button>

// /* CSS */
// .button-48 {
//   appearance: none;
//   background-color: #FFFFFF;
//   border-width: 0;
//   box-sizing: border-box;
//   color: #000000;
//   cursor: pointer;
//   display: inline-block;
//   font-family: Clarkson,Helvetica,sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: 1em;
//   margin: 0;
//   opacity: 1;
//   outline: 0;
//   padding: 1.5em 2.2em;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   text-rendering: geometricprecision;
//   text-transform: uppercase;
//   transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: baseline;
//   white-space: nowrap;
// }

// .button-48:before {
//   animation: opacityFallbackOut .5s step-end forwards;
//   backface-visibility: hidden;
//   background-color: #EBEBEB;
//   clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
//   content: "";
//   height: 100%;
//   left: 0;
//   position: absolute;
//   top: 0;
//   transform: translateZ(0);
//   transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
//   width: 100%;
// }

// .button-48:hover:before {
//   animation: opacityFallbackIn 0s step-start forwards;
//   clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
// }

// .button-48:after {
//   background-color: #FFFFFF;
// }

// .button-48 span {
//   z-index: 1;
//   position: relative;
// }