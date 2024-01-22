import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return (<Shimmer />);
    // console.log(resInfo)
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards)
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p>
                {cuisines.join(" , ")} - {costForTwoMessage}
            </p>
            {/* building a accordions */}
            {
                console.log("first")}
            {
                categories.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        showItems={showIndex === index}
                        data={category?.card?.card}
                        index={index}
                        setShowIndex={(index) => {
                            setShowIndex(index);
                        }}
                    />
                ))
            }
        </div>
    )
}
export default RestaurantMenu;