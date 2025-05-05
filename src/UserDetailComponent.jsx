import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import USERSERVICE from "./User-Service"; 

function UserDetailComponent() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    USERSERVICE.getUserById(id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  return (
    <div className="container">
      <h5>User Details</h5>
      <table className="table table-striped table-bordered">
        <tbody>
          <tr>
            <td>User ID</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>User Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>User Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>User Phone</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserDetailComponent;
