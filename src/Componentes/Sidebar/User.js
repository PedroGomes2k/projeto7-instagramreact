import { useState } from "react"

export default function User() {
    const [nameUser, setNameUser] = useState("catanacomics")
    const [imageUser, setImageUser] = useState("assets/img/catanacomics.svg")


    function ChangeName() {
        const newName = prompt("Qual sera seu novo nome?")

        setNameUser(newName)

    }

    function ChangeImage() {
        const newimage = prompt("Qual ira ser a nova imagem ?")

        if (newimage === "") {

        } else {
            setImageUser(newimage)
        }

    }


    return (
        <div className="usuario">

            <img src={(!imageUser) ? "" : `${imageUser}`} onClick={ChangeImage} alt="imagem de perfil" data-test="profile-image"/>
            <div className="texto">
                <span>
                    <strong data-test="name">{(!nameUser) ? "" : `${nameUser}`}</strong>
                    <ion-icon name="pencil" onClick={ChangeName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}