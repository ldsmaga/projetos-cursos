import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const Func = props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }
    return (
        <div>
            <span>{nome} - </span>
            <span>{idade} - </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

export default Func;