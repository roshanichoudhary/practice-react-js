import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  const user = {
    name: "Anna",
    imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imgSize: 90,
  };

  return (
    <div>
      <h4>{user.name}</h4>
      <img
        className={classes.avatar}
        src={user.imgUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imgSize,
          height: user.imgSize,
        }}
      />
    </div>
  );
};

export default Profile;
