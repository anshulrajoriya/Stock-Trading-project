import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/?error=notfound", { replace: true });
  }, []);

  return <h2>Redirecting...</h2>;
}

export default NotFound;