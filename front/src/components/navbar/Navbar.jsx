import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const disponivel = location.pathname !== '/login' && location.pathname !== '/register';

    const handleClick = (type) => {

        if (type === "s") {
            navigate("/register");
            return;
        }

        navigate("/login");
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">massante</span>
                </Link>
                {user ? disponivel && user.username : disponivel && <div className="navItems">
                    <button className="navButton" onClick={() => handleClick("s")}>Sign up</button>
                    <button className="navButton" onClick={() => handleClick("l")}>Login</button>
                </div>}
            </div>
        </div>
    )
}

export default Navbar;
