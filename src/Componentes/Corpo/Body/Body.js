import Sidebar from "../../Sidebar/Sidebar"
import Stories from "../Story/Stories"
import Posts from "../Posts/Posts"

export default function Body() {
    return (
        <div className="corpo">
            <div className="esquerda" >
                <Stories />
                <Posts />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>

    )
}