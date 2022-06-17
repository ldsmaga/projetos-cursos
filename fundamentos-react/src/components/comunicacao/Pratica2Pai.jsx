import React, { useState } from 'react'
import PraticaFilho from './Pratica2Filho'

const Pai = props => {
    const [titulo, setTitulo] = useState("Entendendo useState!")

    function mudarTitulo(novoValor){
        setTitulo(novoValor)
    }
    return (
        <div>
            <h1>{ titulo }</h1>
            <PraticaFilho ai={mudarTitulo}></PraticaFilho>
        </div>
    )
}

export default Pai;