import React, { useContext } from "react";
import { Store } from "../context";

function UserProfileShow() {
  const { userDetails } = useContext(Store);

  return (
    <div>
      <p className="profile_name">
        {userDetails ? userDetails.name : "your name"}
      </p>
      <p className="profile_desig">
        {userDetails ? userDetails.desig : "your designation"}
      </p>
      <p className="profile_phone">
        {userDetails ? userDetails.phone : "your phone"}
      </p>
    </div>
  );
}

export default UserProfileShow;
