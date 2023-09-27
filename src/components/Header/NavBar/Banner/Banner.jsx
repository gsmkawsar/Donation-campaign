

const Banner = () => {
    return (
        <div className=" flex  items-center justify-center text-center relative ">
            <div className=" ">
                <img src="https://i.ibb.co/nw4xTtk/Rectangle-4281.png" alt="" />
            </div>
            <div className="absolute w-full h-full flex bg-white/95 justify-center items-center backdrop-brightness-100">
                <div className=" ">
                    <h2 className="text-xl lg:text-3xl font-bold ">I Grow By Helping People In Need</h2>
                    <div className=" py-5">
                        <input className="rounded-l-lg border-solid border-2 border-black py-2 pl-2 w-60" placeholder="Search" />
                        <button className="rounded-r-lg border-solid border-2 border-black py-2 px-5 bg-[#FF444A] text-white ">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;