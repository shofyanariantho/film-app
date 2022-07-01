import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PrivateRoutes = () => {
  const [token, setToken] = useState([]);
  const redirect = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/token", {
        withCredentials: true,
      });
      setToken(response.data.accessToken);
    } catch (error) {
      if (error.response) {
        redirect("/login");
      }
    }
  };
  return <Outlet context={[token, setToken]} />;
};

export default PrivateRoutes;
