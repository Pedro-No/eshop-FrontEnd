import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

function Favourites() {
  const [favourites, setFavourite] = useState([]);
  const { user } = useContext(AuthContext);

  const getFavourites = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/favourites/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setFavourite(response.data);
      console.log("here", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavourite = async (fav) => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${
          user._id
        }/favourites-del/${fav}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      getFavourites();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <>
      {favourites ? (
        favourites.map((fav) => (
          <>
            <div className="profile-card">
              <p><a onClick={() => removeFavourite(fav._id)}>❌</a> {fav.name}</p>
              <img className="profile-card-img" src={fav.imageUrl} alt={fav.name} />
            </div>
          </>
        ))
      ) : (
        <p>Still no favourites?</p>
      )}
    </>
  );
}

export default Favourites;
