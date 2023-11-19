import Image from "../images/heroBg.jpg";

const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity as needed
        backgroundBlendMode: 'multiply'
    };

    return (
        <div className="font-semibold mt-16 w-full overflow-hidden h-[100vh] flex flex-col gap-10 items-center justify-center" style={backgroundImageStyle}>
            <div className="text-7xl text-white">Welcome to</div>
            <div className="text-7xl text-white">Kalasey Village</div>
            {/* <div>
                <a className="text-lg p-4 bg-white">
                    EXPLORE
                </a>
            </div> */}
        </div>
    );
}

export default Hero;