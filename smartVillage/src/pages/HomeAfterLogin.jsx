
import NavbarAfter from "../components/NavbarAfterLogin.jsx";
import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


const HomeAfterLogin = () => {

    return (
        <div>
            <NavbarAfter />
            <Hero/>
            <About/>
            <Footer/>
        </div>
    );
};

export default HomeAfterLogin;