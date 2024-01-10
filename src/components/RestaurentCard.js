
import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name, cuisines, avgRating, sla, cloudinaryImageId
    } = resData?.info;     //optional chaining
    return (
        < div className="res-card" style={{ backgroundColor: "#f0f0f0" }
        }> {/*This is an inline CSS*/}
            < img
                className="res-card-image"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div >
    )
}
export default RestaurantCard;