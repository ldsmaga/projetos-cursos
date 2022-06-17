const func = (props) => {
    const result = parseInt(Math.random() * (props.max - props.min) + props.min);
    return (
    <>
        <p>O valor sorteado é: {result}! Parabéns!</p>
    </>
    )
}

export default func;