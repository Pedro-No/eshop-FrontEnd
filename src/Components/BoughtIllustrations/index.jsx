import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

function BoughtList() {
  const [bought, setBought] = useState([]);
  const { user } = useContext(AuthContext);

  const getBought = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${user._id}/paid`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setBought(response.data);
      console.log("here", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBought();
  }, []);

  return (
    <>
      {bought ? (
        bought.map((bg) => (
          <>
            <div className="profile-card">
              <p> {bg.name} | {bg.date}</p>
              <img className="profile-card-img" src={bg.imageUrl} alt={bg.name}/>
            </div>
          </>
        ))
      ) : (
        <p>Nothing bought yet!</p>
      )}
    </>
  );
}

export default BoughtList;
