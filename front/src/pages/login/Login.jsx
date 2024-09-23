import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        senha: "",
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/api/auth/login", credentials);


            if (res.data.isAdmin) {
                navigate("/admin");
                dispatch({ type: "LOGIN_SUCCESS", payload: { ...res.data.details, isAdmin: res.data.isAdmin } });
            } else {
                navigate("/");
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data });
        }
    };

    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="senha"
                    id="senha"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Login
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
};

export default Login;
