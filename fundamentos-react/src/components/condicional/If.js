const func = props => {
    if(!props.test){
        return false
    }
    return props.children
}

export default func;