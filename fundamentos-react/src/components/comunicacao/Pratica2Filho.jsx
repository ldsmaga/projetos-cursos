import React, { useState } from 'react'

const Filho = props => {
    const [valor, setValor] = useState('Digite aqui');
    const funcaoCallback = props.ai;

    function mudarValor(e){
        setValor(e.target.value)
    }

    return (
        <div>
        <input type="text" value={valor} onChange={mudarValor}/>
        <button onClick={_ => {funcaoCallback(valor)}}>Atualizar título pai</button>
        </div>
    )
}

export default Filho;