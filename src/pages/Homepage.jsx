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
  async function fetchUsers() {
    let { data: UserProfile, error } = await supabase
      .from("UserProfile")
      .select("*")
      .eq("UserID", token.user.id);

    if (error) {
      console.error("Error fetching:", error);
      return;
    } else {
      console.log("Fetched Data: ", UserProfile);
      return UserProfile;
    }
  }
  const userProfile = userInfo.map((profile) => (
    <div key={profile.id}>
      <h1>
        Welcome Back {profile.FirstName} {profile.LastName}
      </h1>
      <h2>Address</h2>
      <p>{profile.Address}</p>
      <p>
        {profile.City}, {profile.State} {profile.PostalCode}
      </p>
    </div>
  ));
  console.log(userInfo);
  return <>{userProfile}</>;
};

export default Homepage;
