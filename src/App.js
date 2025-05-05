import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListComponent from "./UserListComponent";
import UserDetailComponent from "./UserDetailComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListComponent />} />
        <Route path="/user/:id" element={<UserDetailComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
