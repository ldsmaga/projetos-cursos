import React from 'react'
import alunos from '../../data/alunos'
const func = props => {
    const lis = alunos.map(aluno=>{
        return <li key={aluno.id}>
            {aluno.id}) {aluno.nome} - {aluno.nota}
        </li>
    });
    
    return(
        <div>
            <ul style={{listStyle: 'none'}}>
                {lis}
            </ul>
        </div>
    )
}

export default func;