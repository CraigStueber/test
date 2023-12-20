import React, { useState, useEffect } from "react";
import { SignUp, Login, Homepage } from "./pages";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const [token, setToken] = useState(false);
  const [userInfo, setUserInfo] = useState();
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/"
          element={<Login setToken={setToken} setUserInfo={setUserInfo} />}
        />
        {token ? (
          <Route
            path="/homepage"
            element={<Homepage token={token} userInfo={userInfo} />}
          />
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
};

export default App;
