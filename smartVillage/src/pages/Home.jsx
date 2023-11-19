// Home.jsx
// import React from 'react';
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


const Home = () => {
    // const link = {
    //     home: "/",
    //     market: "/market"
    // }

    return (
        <div>
            <Navbar />
            <Hero/>
            <About/>
            <Footer/>
        </div>
    );
};

export default Home;