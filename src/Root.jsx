import {  Outlet } from "react-router-dom";
import Navbar from "./Components/Header/Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;