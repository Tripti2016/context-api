import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const {user} = useContext(UserContext);
  
  if (!user) return <h3> Please login</h3>;
  return <div className="text-3xl bg-500-red w-100 text-center mt-5">Welcome {user.username}</div>;
}

export default Profile;
