import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({ items }) => {
    // console.log("hi2")
    // console.log(items);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch an action
        console.log("geheb");
        dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                    <div className="p-2 w-9/12">
                        <span>{item?.card?.info?.name}</span>
                        <span>{" "} - ₹{" "}{(item?.card?.info?.price ? item?.card?.info?.price : item?.card?.info?.defaultPrice) / 100}</span>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 relative">
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-26 h-20 ml-20" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button onClick={() => handleAddItem(item)} className="p-2 rounded-lg text-white bg-slate-900 bg-opacity-50 shadow-lg z-10">Add +</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default ItemList;