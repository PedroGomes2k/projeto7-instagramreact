import Post from "./Post"

export default function Posts() {
  const post = [
    {
      userImage: "assets/img/barked.svg",
      userName: "barked",
      contentImage: "assets/img/dog.svg",
      userLikedImage: "assets/img/adorable_animals.svg",
      userLikedName: "adorable_animals",
      startcounter:"360"
    },
    {
      userImage: "assets/img/meowed.svg",
      userName: "meowed",
      contentImage: "assets/img/gato-telefone.svg",
      userLikedImage: "assets/img/respondeai.svg",
      userLikedName: "respondeai",
      startcounter:"132"
    },
    {
      userImage:"https://www.gerarmemes.com.br/uploads/galeria/meme-185-chiquinha-gerador-de-memes.jpg",
      userName: "Memesdochaves",
      contentImage: "https://akns-images.eonline.com/eol_images/Entire_Site/20141029/rs_560x448-141129073023-yh0mty.jpg?fit=around%7C560:448&output-quality=90&crop=560:448;center,top",
      userLikedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWhbi2R7NmYtDkYxi6Mds7uRJdflu6qHHyA&usqp=CAU",
      userLikedName: "peleoficial",
      startcounter:"1270"
    }
  ]
  return (
    <div className="posts">
      {post.map((p) => (

        <Post
          key={p.userName}
          userImage={p.userImage}
          userName={p.userName}
          contentImage={p.contentImage}
          userLikedImage={p.userLikedImage}
          userLikedName={p.userLikedName}
          startcounter={p.startcounter}
        />
      )
      )}
    </div>
  )
}