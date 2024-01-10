import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurantMenu = (resId) => {
    //fetch data and return.
    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    })

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        // console.log(json.data);
        setresInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;

//This is our custom hook .