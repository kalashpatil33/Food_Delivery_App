// we can even name this file with jsx ts or js doesn't matter
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
// import resList from "../../utils/mockData";
import { useState, useEffect, useContext } from "react";  //inbuilt react function mahnu shakto apan yala.
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../../utils/UserContext"
const Body = () => {
    // var List = resList;       //this was only updating the console not UI
    // var list = resList;
    // useEffect Hook use karuya this is for postrender stuff..
    // const [List, setList] = useState(resList);      //This is array destructuring only nothing different.
    const [List, setList] = useState([]);  //the above was for dummy data this after fetching data empty mock data  displayed..
    const [filteredList, setfilterList] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const [searchText, setsearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        // console.log("Hii")   
        console.log(json);
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>
                Looks like u are offline buddy...Papa ko bolna wifi lagagye..
            </h1>
        )
    }
    const { setUserName, loggedInUser } = useContext(UserContext);
    //conditional Rendering..
    // console.log(List);
    if (List?.length === 0) {
        console.log("Hello")
        return <Shimmer />
    }
    return (
        <div className="body w-[100%] h-auto">
            <div className="flex items-center space-x-5 mb-4 mt-4">
                <div>
                    <input
                        type="text"
                        className="border-2 border-orange-400 bg-red-50 h-9 px-4 rounded-full focus:outline-none transition-all duration-300 ml-5"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                            // console.log(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-all duration-300"
                    onClick={() => {
                        const filteredRestaurant = List?.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ));
                        setfilterList(filteredRestaurant);
                    }}
                >Search
                </button>
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-all duration-300"
                    onClick={() => {
                        const filteredList = List?.filter((x) => x.info.avgRating < 4);
                        // console.log(List);
                        setfilterList(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <div className="flex items-center">
                    <input className="border-2 border-orange-400 bg-red-50 h-[38px] px-4 rounded-full  mt-1" placeholder="UserName" onChange={(e) => setUserName(e.target.value)}
                        value={loggedInUser} />
                </div>
            </div>
            <div className="flex w-10/12 mx-auto flex-wrap justify-center p-4 m-4 h-[100%]">
                {
                    filteredList?.map((x) => (
                        <Link
                            key={x.info.id}
                            to={"/restaurants/" + x.info.id}>
                            <div className="w-64 flex flex-wrap p-4 m-2 transition-transform duration-500 ease-in-out transform hover:bg-orange-300 hover:scale-105">
                                {x.info.veg ? <RestaurantCardPromoted resData={x}/> : <RestaurantCard resData={x} />}
                            </div>
                        </Link>
                    ))
                }
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
               <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} /> */}
            </div>
        </div >
    )
}
export default Body;