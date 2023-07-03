export default function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image}  alt={props.image} />
                <div className="texto">
                    <div className="nome">{props.name}</div>
                    <div className="razao">{props.reson}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}