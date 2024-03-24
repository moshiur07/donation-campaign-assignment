import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-2">
            <div>
                <img className="w-[50%] md:w-[70%]" src='../../../../public/Resources/Logo.png' alt="" />
            </div>
            <ul className="hidden lg:flex gap-6">
                <li className="text-xl font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                    >Home</NavLink>
                </li>

                <li className="text-xl font-medium">
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                    >Donation</NavLink>
                </li>
                <li className="text-xl font-medium">
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                    >Statistics</NavLink>
                </li>
            </ul>
            <div className="lg:hidden ">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="text-2xl mr-4"><MdOutlineMenuOpen /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-44">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/donation'>Donation</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;