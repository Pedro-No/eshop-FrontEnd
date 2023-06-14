import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Favourites from "../../Components/Favourites/index";
import BoughtList from "../../Components/BoughtIllustrations/index";

function Profile() {
  const [user, setUser] = useState(null);
  const [userIllustrations, setUserIllustrations] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        let responseUser = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`
        );
        let responseUserIllustrations = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/owner/${id}`
        );
        setUser(responseUser.data);
        setUserIllustrations(responseUserIllustrations.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [id]);

  return (
    <div className="user-profile">
      <div className="user-profile-bar">
        <img className="user-img" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="user pic" />
        <hr/>
        {user && <h3>{user.username}</h3>}
        {user && <p>{user.email}</p>}
        <hr/>
        <Link to={`/user-profile/${id}/edit`} className="nav-link">
          Edit Profile
        </Link>
        <hr/>
        <Link to={`/user-profile/${id}/add-illustration/`} className="nav-link">
          Add Illustrations
        </Link>
        <hr/>
      </div>
      <div className="user-profile-info">
        {user && (
          <div>
            <div className="user-info">
            <h3>Your Artworks</h3>
            <section className="user-profile-section">
              {userIllustrations.map((illustration) => {
                return (
                  <div className="profile-card">
                    <img className="profile-card-img" src={illustration.imageUrl} alt="illustration image" />
                  </div>
                );
              })}
            </section>
            </div>
          </div>
        )}
        <h3>Bought</h3>
        <section className="user-profile-section">
          <BoughtList />
        </section>
        <h3>Favourites</h3>
        <section className="user-profile-section">
          <Favourites />
        </section>
      </div>
    </div>
  );
}

export default Profile;
