import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment(){
        // this.setState({
        //     count : this.state.count + 1
        // },
        // () => {console.log("callback method count ",this.state.count)}
        // )

        this.setState( prevState => ({
            count : prevState.count +1
        }),
        () => {console.log("callback method count ",this.state.count)})
    }
    incrementFiveTimes(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div><h1>Count - {this.state.count}</h1></div>
                <button onClick={()=>this.incrementFiveTimes()}>Increment</button>
            </div>
        )
    }
}

export default Counter
