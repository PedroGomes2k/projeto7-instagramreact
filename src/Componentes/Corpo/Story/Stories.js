import Story from "./Story"
export default function Stories() {

  const story = [
    {
      image: "assets/img/9gag.svg",
      name: "9gag"
    },
    {
      image: "assets/img/meowed.svg",
      name: "meowed"
    },
    {
      image: "assets/img/barked.svg",
      name: "9gag"
    },
    {
      image: "assets/img/nathanwpylestrangeplanet.svg",
      name: "9gag"
    },
    {
      image: "assets/img/wawawicomics.svg",
      name: "9gag"
    },
    {
      image: "assets/img/respondeai.svg",
      name: "9gag"
    },
    {
      image: "assets/img/filomoderna.svg",
      name: "9gag"
    },
    {
      image: "assets/img/memeriagourmet.svg",
      name: "9gag"
    }
  ]
  return (
    <div class="stories">
      {story.map((s) =>
        <Story
          key={s.name}
          image={s.image}
          name={s.name}
        />
      )}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>

  )
}