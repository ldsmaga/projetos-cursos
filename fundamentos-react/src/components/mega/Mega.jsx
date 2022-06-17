import React, { useState } from 'react'

const Func = props => {

    const [numeros, setNumeros] = useState([0]);

    function gerarNumeros(qtde) {
        let min = 1;
        let max = 60;
        let numeros = [];
    
        min = Math.ceil(min);
        max = Math.floor(max);
    
        if(qtde <= 7 ){
        for (let index = 0; index < qtde; index++) {
            let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if(!numeros.includes(aleatorio)){
                numeros.push(aleatorio);
            }
        }
        
        numeros.sort(function(a, b) {
            return a - b;
          });
    
    
        return numeros;
    }
        return "Máximo permitido é 7";
    }
    
    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros}</h3>
            <button onClick={setNumeros(gerarNumeros(6))}>Gerar números</button>
        </div>
    )
}


export default Func;