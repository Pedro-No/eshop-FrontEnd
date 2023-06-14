import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context.jsx";
import { Link } from "react-router-dom";

function EditUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const { logOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`)
      .then((response) => {
        const oneUser = response.data;
        setUsername(oneUser.username);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { username, password };

    axios
      .put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`,
        requestBody
      )
      .then(() => {
        navigate(`/user-profile/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = () => {
    axios
      .delete(`${import.meta.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`)
      .then(() => {
        logOutUser();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Link to={`/user-profile/${id}`}>Back</Link>
      <h3>Edit your profile</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label><br></br>
        <input
          required
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>

        <label>Password:</label><br></br>
        <textarea
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>

        <Link to={`/user-profile/${id}`}>
          <button type="submit">Edit</button>
        </Link>
      </form>

      <Link to={`/`}>
        <button onClick={deleteUser}>Delete your profile?</button>
      </Link>
    </div>
  );
}

export default EditUser;
