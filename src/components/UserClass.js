// At the end of the day a class component is Nothing but Js class

import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Child Constructor Called");
        this.state = {
            userinfo: {
                name: "Dummy",
                location: "Default"
            },
            count: 0,
            count2: 1,
        }
    }
    async componentDidMount() {
        // console.log("Child Component Did mount");
        const data = await fetch("https://api.github.com/users/kalashpatil33");
        const json = await data.json();
        this.setState({
            userinfo: json
        })
    }
    render() {
        const { name, location, avatar_url } = this.state.userinfo;
        const { count } = this.state;
        console.log("Child Render Hotoy re");
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <img src={avatar_url} />
                <h2>count :{count}</h2>
                <h3>Location: Dhule</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count - 1
                    })
                }}>Decrease Count</button>
                <h2>Contact : patilkalash33@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;