
import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name, cuisines, avgRating, sla, cloudinaryImageId
    } = resData?.info;     //optional chaining
    return (
        <div className="res-card border p-4 rounded-md mb-4">
            <div className="h-fit">
                <img
                    className="h-48 w-full object-cover rounded-md mb-2"
                    src={CDN_URL + cloudinaryImageId}
                    alt="Restaurant Image"
                />
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <h4 className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</h4>
                <h4 className="text-base text-gray-700 mb-2">{avgRating}</h4>
                <h4 className="text-base text-gray-700">{sla.deliveryTime}</h4>
            </div>
        </div>

    )
}

// Higher order Component
// input -RestaurantCard ===>>> RestaurantCardPromoted

const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-600 px-2 text-white shadow-lg rounded-lg">Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export { RestaurantCard, withPromotedLabel };