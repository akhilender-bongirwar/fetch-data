import React from "react";

function UserData({ users }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.avatar} />
            <li>
              {user.first_name} {user.last_name}
            </li>
            <li>{user.email}</li>
          </div>
        );
      })}
    </ul>
  );
}

export default UserData;
