export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image} alt="9gag" />
            </div>
            <div className="usuario">
                {props.name}
            </div>
        </div>
    )
}