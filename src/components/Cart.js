import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../../utils/cartSlice"
import ItemList from "./ItemList";
const Cart = () => {
     const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems); 
    const dispatch = useDispatch();
    const handleEmptyCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-auto flex justify-center align-baseline">
            <div className="p-4 text-2xl font-bold">
                Cart
            </div>
            <div>
                <button className="bg-black text-white text-sm p-1 m-4 rounded-lg" onClick={handleEmptyCart}>Clear Cart</button>
            </div>
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;