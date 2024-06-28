import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import Profile from "../profile/Profile";
export default function Home() {
  return (
    <>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar profile={true}/>
        </div>

    </>
  )
}
