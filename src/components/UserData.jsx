import React from "react";
import './UserData.css'
function UserData({ users }) {
  return (
    <div className="user--body">
    <ul>
      {users.map((user) => {
        return (
          <div key={user.id} className="user--card">
            <img src={user.avatar} />
            <li>
              {user.first_name} {user.last_name}
            </li>
            <li>{user.email}</li>
          </div>
        );
      })}
    </ul>
    </div>
  );
}

export default UserData;
