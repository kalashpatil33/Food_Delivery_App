import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../../utils/UserContext";
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>It is what it Is !!</h2>
//             {/* <User Name={"kalash"}/> */}
//             <UserClass name={"King"}/>
//         </div>
//     );
// };
class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent cha constructor ahe re mi");
    }
    
    componentDidMount() {
        // console.log("Parent Did Mount???");
    }
    render() {
        // console.log("Parent Render hotoy");
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">
                                {loggedInUser}
                            </h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>It is what it Is !!</h2>
                <UserClass name={"King"} />
            </div>
        );
    }
}
export default About;