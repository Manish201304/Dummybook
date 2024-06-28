import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  const HomeRightBar = ()=>{
    return(
      <>
      <div className="birthdayConatiner">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Raju yadav</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = ()=>{
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New Delhi</span>
        </div>
         <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Punjab</span>
        </div>
         <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Rini Yadav</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Karan Veram</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ishika Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Himanshi Rana</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Neha</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Manshi</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kesav</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Priyanshi</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
