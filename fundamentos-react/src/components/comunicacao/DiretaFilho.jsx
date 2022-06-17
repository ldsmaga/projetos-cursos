import React from 'react'

const func = props => {
    return (
        <div>
            <div>{props.texto}</div>
            <div>{props.numero}</div>
            <div>{props.bool ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}

export default func;