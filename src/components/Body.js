// we can even name this file with jsx ts or js doesn't matter
import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData";
import { useState, useEffect } from "react";  //inbuilt react function mahnu shakto apan yala.
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
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
    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        // console.log(jso  n?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
    {
        return (
            <h1>
                Looks like u are offline buddy...Papa ko bolna wifi lagagye..
            </h1>
        )
    }
    //conditional Rendering..
    // console.log(List);
    if (List?.length === 0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText} onChange={(e) => {
                            // if (e.target.value.length === 0)
                            //     setList(List);
                            setsearchText(e.target.value);
                            // console.log(e.target.value);
                        }} />
                    <button onClick={() => {
                        const filteredRestaurant = List.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setfilterList(filteredRestaurant);
                        // console.log(searchText);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = List.filter((x) => x.info.avgRating < 4);
                    // console.log(List);
                    setfilterList(filteredList);
                }}>Top Rated restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredList?.map((x) => (
                        <Link
                            key={x.info.id}
                            to={"/restaurants/" + x.info.id}>
                            <RestaurantCard resData={x} />
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