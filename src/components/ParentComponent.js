import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Parent'
        }
        this.greetMsg = this.greetMsg.bind(this)
    }
    greetMsg(param){
        alert(`Hello ${this.state.name} from ${param}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetMsg = {this.greetMsg}/>
            </div>
        )
    }
}

export default ParentComponent
