import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
export const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    // const btnName = "Login";
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/" >Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">ContactUS</Link>
                    <Link to="/Cart">Cart</Link>
                    <button className="login-btn" onClick={() => {
                        if (btnName === "Login")
                            setbtnName("Logout")
                        else
                            setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;