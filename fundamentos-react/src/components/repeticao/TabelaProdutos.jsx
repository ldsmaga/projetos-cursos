import React from 'react'
import '../repeticao/Tabela.css'
import produtos from '../../data/produtos'
const func = props => {
    const prods = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {prods}
                </tbody>

            </table>
        </div>
    )
}

export default func;