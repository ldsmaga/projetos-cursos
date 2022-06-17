import React, { useState } from 'react'

const Func = props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <input type="text" value={valor} onChange={quandoMudar}/>
        </div>
    )
}

export default Func;