import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectRoute = ({ checkAdmin, children }) => {
  const { user } = useAuthContext();
  console.log("user", user);
  if (!user || (checkAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectRoute;
