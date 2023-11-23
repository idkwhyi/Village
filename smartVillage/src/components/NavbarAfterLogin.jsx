
import logo from "../images/logo.png"
import NavbarList from "./NavbarList";
import './NavbarAfterLogin.css'

function NavbarAfterLogin() {
    // const navigate = useNavigate();

    // const [loginStatus, setLoginStatus] = React.useState(false)
    // const validateLogin = (newValue) => {
    //     setLoginStatus(newValue)
    // }

    return (
        <div className=" z-10 fixed top-0 w-full h-16 bg-[#8DDFCB] flex justify-between items-center shadow-lg px-10">
            <div className="w-12 h-12">
                <img src={logo}/>
            </div>
            <div>
                <ul className="flex gap-12">
                    <li>
                        <NavbarList name="Home" link="/homeAfter"/>
                    </li>
                    <li>
                        <NavbarList name="Gudang Admin" link="/gudang"/>
                    </li>
                </ul>
            </div>
            <NavbarList name="Log Out" link="/"/>
        </div>
    );
}

export default NavbarAfterLogin;
