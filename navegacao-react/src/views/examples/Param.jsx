import React from 'react'

import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams();
    return (
        <div className='Param'>Componente Param: {id}</div>
    )
}

export default Param;