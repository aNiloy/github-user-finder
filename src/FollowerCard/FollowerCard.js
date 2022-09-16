import React, { Fragment, useState } from "react";
import "./FollowerCard.css";
import { useEffect } from "react";

const FollowerCard = ({ user, setUser, handleData, setSearchText }) => {
  const [followers, setFollowers] = useState([]);

  // const handleFollower = (follower) => {
  //   handleData(follower);
  // };

  useEffect(() => {
    function getFollowers() {
      if (user.followers_url) {
        console.log(user);
        fetch(user.followers_url)
          .then((res) => res.json())
          .then((data) => {
            // data = data.slice(0, 5);
            setFollowers(data);
          });
      }
    }
    getFollowers();
  }, [user]);

  console.log(followers);

  const searchFollower = (follower) => {
    setSearchText(follower.login);
    handleData(follower.login)
  }

  return (
    <div className="follower-card mt-4 mb-4 p-4">
      <h5 className="">Followers</h5>
      <div className="follower-list">
        {followers.map((follower) => {
          return (
            <Fragment 
            key={follower.id}>
              <div
          
                onClick={() => searchFollower(follower)}
                className="follower-details d-flex my-3 p-3"
              >
                <div className="follower-image">
                  {" "}
                  <img src={follower.avatar_url} alt="user" srcSet=""></img>
                </div>
                <div className="px-4 py-2">
                  <h6>{follower.login}</h6>
                  <p className="follower-url">{follower.html_url}</p>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FollowerCard;
