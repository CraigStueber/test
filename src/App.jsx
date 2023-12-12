import React, { useState } from "react";
import { SignUp, Login } from "./pages";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
