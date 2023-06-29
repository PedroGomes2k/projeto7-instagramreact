export default function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image}  alt={props.image} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.reson}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}