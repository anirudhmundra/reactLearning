import React from 'react'

function FunctionClick() {
  function onClickEvent() {
        console.log("From the FunctionClick.js")
    }
    return (
        <div>
            <button onClick={onClickEvent}>Click me from FunctionClick.js</button>
        </div>
    )
}

export default FunctionClick