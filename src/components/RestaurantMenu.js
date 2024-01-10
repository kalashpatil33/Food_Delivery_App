import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constants";
const RestaurantMenu = () => {
    useEffect(() => {
        fetchMenu();
    }, []);
    const [resInfo, setResinfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        console.log(json.data);
        setResinfo(json.data);
    }

    if (resInfo === null) return (<Shimmer />);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // if (itemCards === null) {
    //     return (<Shimmer />);
    // }
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(" , ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((x) =>
                        <li id={x?.card?.info?.id}>{x?.card?.info?.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default RestaurantMenu;