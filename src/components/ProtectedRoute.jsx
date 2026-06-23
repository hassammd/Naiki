import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = UseAuthContext();
  if (!user) {
    //if user is not logged in navigate to the auth page
    return useEffect(() => {
      navigate("/auth");
    });
  }
  // if user is loggged in then render the child page
  return children;
};

export default ProtectedRoute;
