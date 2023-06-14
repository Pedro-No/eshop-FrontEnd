import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

import { FaSearch } from "react-icons/fa";
import { Divider, Input } from "antd";

import projectsService from "../../../Services/project.services";

function IllustrationList() {
  const [illustrations, setIllustrations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIllustration, setFilteredIllustration] = useState([]);

  const { user } = useContext(AuthContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    const filter = [];

    illustrations.map((illustration) => {
      if (
        illustration.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        illustration.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        filter.push(illustration);
      }
    });
    setFilteredIllustration(filter);
    console.log(searchQuery);
  };

  const getAllIllustrations = () => {
    projectsService
      .getAllIllustrations()
      .then((response) => setIllustrations(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllIllustrations();
  }, []);

  const handleClick = (illustration) => {
    axios
      .post(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${
          user._id
        }/cart/${illustration}`
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickFavs = (illustration) => {
    axios
      .put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${
          user._id
        }/favourites-add/${illustration}`
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="illustrations-list-page">
      <div className="search-section">
        <div className="search">
          <FaSearch />
          <Input type="text" value={searchQuery} onChange={handleSearch} className="search-field" 
          placeholder="Search illustrations..."/>
        </div>
      </div>
      <div className="illustration-list">
        {illustrations.length === 0 && <p>There are no illustrations yet!</p>}
        {illustrations.map((illustration) => {
          if (
            searchQuery.trim() === "" ||
            illustration.author
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            illustration.name.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return (
              <div key={illustration._id} className="illustration-card">
                <Link to={`/illustration/${illustration._id}`}>
                  <img className="illustration-card-img" src={illustration.imageUrl} alt="Illustration Image"/>
                  <div className="illustration-card-text">
                  <p>{illustration.date} | {illustration.name} | {illustration.price}€</p>
                  </div>
                </Link>
                <div className="illustration-card-links">
                <a onClick={() => handleClick(illustration._id)}>
                  🛒
                </a>
                <a onClick={() => handleClickFavs(illustration._id)}>
                  💗
                </a>
                </div>
              </div>
            );
          }
          return null; // Hide illustrations that don't match the search query
        })}
      </div>
    </div>
  );
}
export default IllustrationList;
