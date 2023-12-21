import { useState, useEffect } from "react";
import { supabase } from "../client";

const Homepage = ({ token }) => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await fetchUsers();
      setUserInfo(allUsers);
    };
    getUsers();
  }, []);
  const fetchUsers = async () => {
    let { data: UserProfile, error } = await supabase
      .from("UserProfile")
      .select("*");

    console.log(data);
    return UserProfile;
    console.log(error);
  };

  return (
    <>
      <h1>Welcome Back {token.user.user_metadata.full_name}</h1>
    </>
  );
};

export default Homepage;
