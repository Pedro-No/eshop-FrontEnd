import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/Images/logoartlab.png" alt="logo" className="nav-logo"/>
      </Link>
      <Link to="/" className="nav-link">
        Home
      </Link>
      {isLoggedIn ? (
        <>
          {user && (
            <Link to={`/user-profile/${user._id}`} className="nav-link">
              Profile
            </Link>
          )}
            <Link to={"/cart"} className="nav-link">
              Cart
            </Link>
            <Link to="/illustration" className="nav-link">
              Illustrations
            </Link>
            <a onClick={logOutUser} className="nav-link" >Logout</a>
        </>
      ) : (
        <>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
