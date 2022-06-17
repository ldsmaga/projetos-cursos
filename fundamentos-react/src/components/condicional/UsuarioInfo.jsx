import React from 'react'
import If from './If'

const func = props => {
    const usuario = props.usuario || {}
    return (
        <If test={usuario && usuario.nome}>
        <div>
            Seja bem vindo <strong>{usuario.nome}</strong>
        </div>
        </If>
    )
}

export default func;