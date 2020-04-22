import React from 'react'



function Joke(props) {
    return (
        <div className="jokes">
            <div className="title"> True Jokes </div>
            {
                props.question !== undefined ? <div className="content">{props.question}</div> : ""
            }
            <div className="content">{props.punchLine}</div>
        </div>
    )
}


export default Joke;