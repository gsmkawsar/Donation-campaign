import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div>
            <nav className="lg:flex justify-between items-center py-6 text-xl font-medium px-5">
                <Logo></Logo>
                <ul className="  flex gap-5 m-4 lg:m-0">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;