import { useEffect, useState } from "react";

export const useGetUID = () => {
  const [userId, setUserId] = useState<string | null>();
  useEffect(() => {
    setUserId(localStorage.getItem("uid"));
  }, []);
  return userId;
};
