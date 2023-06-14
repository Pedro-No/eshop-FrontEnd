import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context.jsx";
import { Navigate } from "react-router-dom";

function IsAnon({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  //if authentication is loading
  if (isLoading) return <p>Loading...</p>;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default IsAnon;
