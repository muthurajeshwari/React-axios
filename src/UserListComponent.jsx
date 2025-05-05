import React, { Component } from "react";
import { Link } from "react-router-dom";
import USERSERVICE from "./User-Service"; 

export default class UserListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    USERSERVICE.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <h5>All Users</h5>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/user/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
