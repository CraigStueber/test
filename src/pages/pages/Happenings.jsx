import { useState, useEffect } from "react";
import { supabase } from "../../client";

const Happenings = ({ userID }) => {
  const [happenings, setHappenings] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getHappening = async () => {
      const allHappenings = await fetchHappenings();
      setHappenings(allHappenings);
    };
    const getLoc = async () => {
      const allLoc = await fetchLocations();
      setLocations(allLoc);
    };
    getHappening();
    getLoc();
  }, []);

  async function fetchHappenings() {
    let { data: Happening, error } = await supabase
      .from("Happening")
      .select("*");
    if (error) {
      console.error("Error fetching: ", error);
      return;
    } else {
      return Happening;
    }
  }

  async function fetchLocations() {
    let { data: Location, error } = await supabase.from("Location").select("*");

    if (error) {
      console.error("Error fetching: ", error);
      return;
    } else {
      return Location;
    }
  }
  const user = userID.user.id;
  console.log(locations);
  console.log(happenings);

  const happeningList = happenings.map((item) => (
    <div key={item.id}>
      <h1>{item.name}</h1>
      <h2>{item.description}</h2>
      <p>
        {item.attendees.length} / {item.num_attendees}
      </p>
    </div>
  ));
  return (
    <>
      <h1>Happenings</h1>
      <h2>{happeningList}</h2>
    </>
  );
};

export default Happenings;

// let { data: Happening, error } = await supabase.from("Happening").select("*");
