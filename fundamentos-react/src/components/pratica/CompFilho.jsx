import React, {useState} from 'react'

const FuncFilho = props => {
    
    const cb = props.quandoClicar;
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div>
            <p>Comp filho. Comunicação direta pelo componente pai. Dado: { props.dado }</p>
            <p>Passando dado pro comp pai: </p>
            <input type="text" value={valor} onChange={quandoMudar}/>
            <button onClick={_ => { cb(valor)}}>Alterar título</button>
        </div>
    )
}

export default FuncFilho;