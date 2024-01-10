import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
export const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    // const btnName = "Login";
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex">
            <div className="w-24">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status :{onlineStatus === true ? "✅" : "🔴"}</li>
                    <Link to="/" >Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">ContactUS</Link>
                    <Link to="/grocery">Grocery</Link>
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