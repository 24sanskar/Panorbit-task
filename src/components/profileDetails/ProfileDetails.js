import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./profiledetails.css";

const ProfileDetails = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error(error));
  }, []);

  const handleUserClick = (user) => {
    navigate("/details");
  };
  return (
    <div>
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>
                <img
                  className="tableimg"
                  src={user.profilepicture}
                  alt={user.name}
                />
              </td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileDetails;
