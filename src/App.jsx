import react, { useState } from "react";
import "./App.css";
import UserData from "./components/UserData";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [users, setUsers] = useState([]);
  const handleClick = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonRes = await response.json();
    const dt = jsonRes.data;
    console.log(dt);
    setUsers(dt);
  };
  return (
    <>
      <h1>API CALL USING REACT</h1>
      <button onClick={handleClick}>GET USERS</button>
      {users ? <UserData users={users}/> : <CircularProgress />}
    </>
  );
}

export default App;
