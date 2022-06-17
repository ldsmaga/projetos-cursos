import React, { cloneElement } from 'react'
const func = props => {
    return(
        <div>
            { React.Children.map(props.children, child => { // Mapeia suas children, e em cada child...
                return cloneElement(child, { ...props }); // ... cria um clone, porém com as props que são passadas pra este componente.
            })}
        </div>
    )
}

export default func;