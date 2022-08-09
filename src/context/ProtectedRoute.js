// This function is to ensure pages are only shown to users who are logged in.
// the page must be wrapped within the protectedRoute tag on the App.js page to protect it.
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./userAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
