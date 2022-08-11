// import { , useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const PrivateRoutes = () => {
//   const [token, setToken] = useState([]);
//   const redirect = useNavigate();

//   useEffect(() => {
//     refreshToken();
//   }, []);

//   const refreshToken = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/user/token", {
//         withCredentials: true,
//       });
//       setToken(response.data.accessToken);
//     } catch (error) {
//       if (error.response) {
//         redirect("/login");
//       }
//     }
//   };
//   return <Outlet context={[token, setToken]} />;
// };

// export default PrivateRoutes;

import { useContext } from "react";
import { Route, useNavigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";
// import Loading from "./../components/Loading";

export default function PrivateRoutes() {
  const { user } = useContext(UserContext);
  const redirect = useNavigate();
  console.log(user);

  if (!user) {
    //   return <Route {...rest} render={(props) => <Component {...props} />} />;
    // } else {
    return redirect("/login");
  }

  return <Outlet />;
}
