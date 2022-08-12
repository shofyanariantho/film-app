import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function useAuth() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  //set user
  const setUserContext = async () => {
    return await axios
      .get("http://localhost:8000/user/token", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  //register user
  const registerUser = async (data) => {
    console.log(data);
    const { user_name, user_email, user_password, confirm_password } = data;
    return await axios
      .post(
        "http://localhost:8000/user/register",
        {
          user_name,
          user_email,
          user_password,
          confirm_password,
        },
        { withCredentials: true }
      )
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setError("Please double check your input!");
      });
  };

  //login user
  const loginUser = async (data) => {
    const { user_email, user_password } = data;
    return axios
      .post(
        "http://localhost:8000/user/login",
        {
          user_email,
          user_password,
        },
        { withCredentials: true }
      )
      .then(async () => {
        await setUserContext();
      })
      .catch((error) => {
        // setError(error.response.data.message);
        setError("Email or Password is Invalid!");
      });
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}
