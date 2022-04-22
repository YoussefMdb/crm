import logo from "../images/crm-logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/ticket")}>
          &#43;
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          &#60; &#60;
        </div>
      </div>
    </nav>
  );
};

export default Nav;
