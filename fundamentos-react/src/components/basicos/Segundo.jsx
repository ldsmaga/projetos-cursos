export default function Segundo(props){
    const status = props.nota >= 7.0 ? 'Aprovado' : 'Reprovado';
    return (
    <div>
        <h1>Sua nota é {props.nota}. <br />Você está <strong>{status}</strong>.</h1>
    </div>
    )
}