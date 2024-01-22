import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
// import useOnlineStatus from "../../utils/useOnlineStatus";
export const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    // const btnName = "Login";
    // const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    // Subscribing to carts Items.
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between  p-4  bg-gradient-to-r from-orange-500 to-orange-100 transition-all duration-500">
            <div>
                <img className="w-14 m-4" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="space-x-3 flex items-center">
                    <div className="space-x-3 text-xl text-red-700" >
                        <Link to="/" >Home</Link>
                        <Link to="/about" >About Us</Link>
                        <Link to="/contact" >Contact Us</Link>
                        <Link to="/grocery" >Grocery</Link>
                        <Link to="/cart" >Cart -({cartItems.length} items)</Link>
                    </div>
                    <button className={`border-2 border-orange-400 bg-red-50 h-9 px-4 pb-1 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300`}
                        onClick={() => {
                            setbtnName((prevName) => (prevName === "Login" ? "Logout" : "Login"));
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="p-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>

    )
}
export default Header;