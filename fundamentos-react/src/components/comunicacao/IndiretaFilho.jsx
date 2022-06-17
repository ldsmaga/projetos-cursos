import React from 'react'

const func = props => {
    const cb = props.quandoClicar;
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => { cb('João', 66, true)}}> Fornecer Informações</button>
        </div>
    )
}

export default func;