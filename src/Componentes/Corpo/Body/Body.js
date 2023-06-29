import Sidebar from "../../Sidebar/Sidebar"
import Stories from "../Story/Stories"
import Posts from "../Posts/Posts"

export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda" >
                <Stories />
                <Posts />
            </div>
            <div class="sidebar">
                <Sidebar />
            </div>
        </div>

    )
}