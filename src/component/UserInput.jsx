import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function UserInput() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
    console.log('Submitted')
  };

  return (
    <>
      <div className="user-input">
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
          className="p-2 bg-gray-500"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="p-2 bg-gray-500"
        />
        <button type="submit"
          className="px-3 py-3 text-black-400 bg-red-500 text-2xl"
          onClick={handleSubmit}
        >
          Submit
        </button>{" "}
      </div>
    </>
  );
}

export default UserInput;
