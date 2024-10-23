import { useEffect } from "react";
import StoreList from "./StoreList";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem("token")) {
        navigate("/login");
      }
    }, [navigate]);
  return (
    <div className="container my-3">
<StoreList/>
    </div>
  );
}
