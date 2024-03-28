

const Banner = () => {
    return (
        <div
         className="mt-0  h-[80vh]  ">
            <img src="https://iili.io/Jh5tk8u.png" className="relative w-full h-full opacity-20" alt="" />
            <h1 className="text-5xl  font-bold  absolute top-48 left-[370px] ">I Grow By Helping People In Need</h1>
            <div className="absolute top-80 left-[430px]">
            <input className="w-[500px] p-3 rounded-lg border" type="text" placeholder="Search here..." name="" id="search" />
            <button className="btn bg-[#FF444A] px-4 py-2 rounded-md text-white font-medium">Search</button>
            </div>
        </div>
    );
};

export default Banner;