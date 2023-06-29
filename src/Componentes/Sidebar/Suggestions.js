import Suggestion from "./Suggestion"

export default function Suggestions() {
    const suggestion = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            reson: "Segue você"
        },
        {
            image: "assets/img/chibirdart.svg",
            name: "chibirdart",
            reson: "Segue você"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            reson: "Novo no Instagram"
        },
        {
            image: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            reson: "Segue você"
        },
        {
            image: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            reson: "Segue você"
        }
    ]

    return (

        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <div class="sugestao">
                {suggestion.map((s) =>
                    <Suggestion
                        key= {s.name}
                        image= {s.image}
                        name= {s.name}
                        reson= { s.reson}
                    />
                )}
            </div>
        </div>
    )
}