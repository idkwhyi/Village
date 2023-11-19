import Navbar from "../components/Navbar";

const Market = () => {
    const flexRow = {
        display: 'flex',
        flexDirection: 'Column'
    };

    return (
        <div className="">
            <Navbar/>
            <div className=" w-100% h-max m-16 justify-center items-center bg-slate-300" style={flexRow}>
                <div className="w-[1100px] h-[300px] items-center justify-center mt-7 bg-slate-100">Carousel here</div>
                <div>other content</div>
            </div>
        </div>
    )
}

export default Market;