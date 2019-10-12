import React, {Component} from 'react'

class ClassClick extends Component{
    clickHandler(){
        console.log("Clicked from ClassClick.js")
    }
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Click me from ClassClick.js</button>
            </div>
        )
    }
}

export default ClassClick