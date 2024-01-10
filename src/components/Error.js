import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Dal mai kuch kala hai..</h2>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}
export default Error;