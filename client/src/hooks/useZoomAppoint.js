import { useState } from "react";
import axios from "axios";
export const useZoomAppoint = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const zoomAppoint = (
    date,
    time,
    firstName,
    lastName,
    email,
    appointType
  ) => {
    setIsLoading(true);
    setError(null);

    axios
      .post("/api/zoom/zoomappointment", {
        date,
        time,
        firstName,
        lastName,
        email,
        appointType,
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsLoading(err);
        console.log(err);
      });
  };

  return { zoomAppoint, isLoading, error };
};
