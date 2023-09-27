import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link to={"/"}>
            <img src="Logo/Logo.png" alt="" />
            </Link>

        </div>
    );
};

export default Logo;