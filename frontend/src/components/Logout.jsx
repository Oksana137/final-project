import { useNavigate } from "react-router-dom";
import { logout } from "../units/storage";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="btn btn-ghost">
      Log out
    </button>
  );
};

export default Logout;
