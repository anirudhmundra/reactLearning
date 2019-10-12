import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetMsg('Anirudh')}>Click Me</button>
        </div>
    )
}

export default ChildComponent
