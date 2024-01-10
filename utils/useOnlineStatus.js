import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setonlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("online", () => {
            setonlineStatus(false);
        })
        window.addEventListener("offline", () => {
            setonlineStatus(true);
        })
    }, [])
    //this will return a true or false..
    return onlineStatus;
}


export default useOnlineStatus;