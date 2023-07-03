import { useState } from "react"

export default function Post(props) {

    const [liked, setLiked] = useState("heart-outline")

    const [saved, setSaved] = useState("bookmark-outline")

    const [color, setCorlor] = useState("")

    const [counter, setCounter] = useState(props.startcounter)

    function Saved() {
        if (saved === "bookmark-outline") {
            setSaved("bookmark-sharp")
        } else {
            setSaved("bookmark-outline")
        }

    }

    function Liked() {
        if (liked === "heart-outline") {
            setLiked("heart-sharp")
            setCorlor("vermelho")
            setCounter(counter + 1)

        } else {

            setLiked("heart-outline")
            setCorlor("")
            setCounter(counter - 1)
        }

    }



    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userImage} alt="photouser" />
                    {props.userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.contentImage} alt="gato-telefone"  data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div className="icones" >
                        <div className={`${color}`}><ion-icon onClick={Liked} name={`${liked}`} data-test="like-post" ></ion-icon></div>
                        <div><ion-icon name="chatbubble-outline"></ion-icon></div>
                        <div><ion-icon name="paper-plane-outline"></ion-icon></div>
                    </div>
                    <div>
                        <ion-icon onClick={Saved} name={`${saved}`} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.userLikedImage} alt="photoUserLiked" />
                    <div className="texto" data-test="likes-number ">
                        Curtido por <strong>{props.userLikedName}</strong> e <strong>outras {counter} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}