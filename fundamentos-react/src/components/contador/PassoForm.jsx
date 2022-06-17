import React from 'react'

const Func = props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" id='passoInput' value={props.passo} onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}


export default Func;