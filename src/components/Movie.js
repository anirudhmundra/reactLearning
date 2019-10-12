import React from 'react'

const Movie = (props) => {
    return (<div>
        <h1>Movie Title {props.name} directed by {props.director}</h1>
    </div>)
}

// const Movie = () => {
//     return React.createElement('div', null, React.createElement('h1',null, 'Hello World'))
// }

export default Movie