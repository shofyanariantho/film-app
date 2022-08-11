import { useState, useEffect } from "react";
import axios from "axios";

export default function useFindUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function findUser() {
      await axios
        .get("http://localhost:8000/user/token", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.accessToken);
          setLoading(false);
        })
        .catch((err) => {
          //console.log(err);
          setLoading(false);
        });
    }

    findUser();
    console.log(user);
  }, []);

  return {
    user,
    setUser,
    isLoading,
  };
}
