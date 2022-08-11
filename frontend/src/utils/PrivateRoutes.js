import { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function PrivateRoutes() {
  const { user } = useContext(UserContext);
  const redirect = useNavigate();

  if (!user) {
    return redirect("/login");
  }

  return <Outlet />;
}
