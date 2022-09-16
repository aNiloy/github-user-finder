import React from "react";
import "./UserCard.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaLink } from "react-icons/fa";

const UserCard = ({ user }) => {
  // const [user, setUser] = useState({});
  // donut geddit vvvv
  // console.log(user);
  // useEffect(() => {
  //   //   fetch("https://api.github.com/users/mojombo")
  //   //     .then((res) => res.json())
  //   //     .then((data) => setUser(data));
  //   //
  //   async function handleData() {
  //     const res = await fetch("https://api.github.com/users/aniloy");
  //     const data = await res.json(res);
  //     setUser(data);
  //   }
  //   handleData();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="user-card mt-4 mb-4 p-4">
      <h5 className="">User</h5>
      <div className="user-details">
      <div className="pt-4">
        <img src={user.avatar_url} alt="user" srcSet=""></img>
        <div className="name">
          <h4>{user.name}</h4>
          <span>@{user.login}</span>
        </div>
        <button className="my-3 p-2">Follow</button>
      </div>
      <p>{user.bio}
      </p>
      <div className="location">
        <HiLocationMarker />
        <span>{user.location}</span>
      </div>
      {/* <div className="address">
        <HiOutlineMail />
        <span>{user.email}</span>
      </div> */}
      <div className="link">
        <FaLink />
        <span>{user.html_url}</span>
      </div>
      </div>
    </div>
  );
};

export default UserCard;
