import react, { useState } from "react";
import "./App.css";
import UserData from "./components/UserData";
import Loader from "./components/Loading";

function App() {
  const [users, setUsers] = useState([]);
  const [load,setLoad] = useState(false);

  const handleClick = async () => {
    setLoad(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonRes = await response.json();
    const dt = jsonRes.data;
    console.log(dt);
    setUsers(dt);
    setLoad(false);
  };
  return (
    <div className="body">
      <h1 className="heading">API CALL USING REACT</h1>
      <button onClick={handleClick}>GET USERS</button>
      {!load && <UserData users={users}/>}
      {load && <Loader /> }
    </div>
  );
}

export default App;
