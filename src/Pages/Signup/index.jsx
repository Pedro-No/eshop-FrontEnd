import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import authService from "../../../Services/auth.service.jsx";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [userType, setUserType] = useState("");

  const navigate = useNavigate();

  //Handle change of inputs
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  //Handle the submission of the form

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, email, password };

    authService
      .signup(requestBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  const handleUserType = (e) => {
    console.log(userType);
    setUserType(e.target.value);
  };
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <div>
          <label>Username:</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <label>Email:</label>
          <br></br>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label>Password:</label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <br></br>

        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignUpPage;
