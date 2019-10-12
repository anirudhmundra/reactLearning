import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Hello Anirudh</div>

        // return this.state.isLoggedIn ? <div>Hello Anirudh</div> :
        // <div>Hello Guest</div>

        // let message
        // if (this.state.isLoggedIn) {
        //     message = "Hello Anirudh"
        // }
        // else{
        //     message = "Hello Guest"
        // }
        // return <div>{message}</div>
            // if(this.state.isLoggedIn) {
            //     return <div>Hello Anirudh</div>
            // }
            // else {
            //     return <div>Hello Guest</div>
            // }
    }
}

export default UserGreeting
