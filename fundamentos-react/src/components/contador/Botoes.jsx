import React from 'react'

const Func = props => {
    return (
        <div>
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </div>
    )
}


export default Func;