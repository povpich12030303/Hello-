import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
const Loginform = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Loginform;
