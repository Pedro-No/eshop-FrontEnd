import React, { useState, useEffect } from "react";
import axios from "axios";
import authService from "../../Services/auth.service";

//Creates React Context with shareable State data
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  //write state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  //Stored Token Function
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  //Authentication Function
  const authenticateUser = () => {
    //Get the stored token from local storage
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      authService
        .verify()
        .then((response) => {
          //Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response.data);
        })
        .catch(() => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };
  //Remove Token Function
  const removeToken = () => {
    //upon logout remove the token from local storage
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    //removing the token
    removeToken();
    //to update the state
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
