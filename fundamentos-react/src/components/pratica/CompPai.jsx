import React, {useState} from 'react'
import CompFilho from '../pratica/CompFilho'

const FuncPai = props => {
    const [prop1, setProp1] = useState("Propriedade inicial")

    function mudarProp1(novoValor){
        setProp1(novoValor)
    }
    return (
        <div>
            <h1>{prop1}</h1>
            <p>Comp pai. Filho com props:</p>
            <CompFilho dado="Dado vindo do comp pai" quandoClicar={mudarProp1}></CompFilho>
        </div>
    )
}

export default FuncPai;