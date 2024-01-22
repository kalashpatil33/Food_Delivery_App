import { useState } from "react";
import ItemList from "./ItemList";
const src = "../../Images/down-arrow.png";
// import { setShowItems } from "../components/RestaurantMenu"
const RestaurantCategory = ({ data, showItems, index, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex((prevShowIndex) => {
            const newShowIndex = prevShowIndex === index ? null : index;
            // console.log("newShowIndex:", newShowIndex);
            return newShowIndex;
        });
    };
    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 m-auto mb-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="text-lg font-bold">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="ml-2 p-2">{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};


export default RestaurantCategory;
