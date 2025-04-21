import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchHandle = (e) => {
    const newTheme = e.target.checked ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <nav className="navbar d-flex flex-row">
      <h1>LifeBoard</h1>
      <div className="Links d-flex flex-row">
        <Link to="/" className="Logoutbtn" style={{height:"1.8rem"}}>LogOut</Link>
        <Link to="/" className="Homebtn" style={{height:"1.8rem"}}>Home</Link>
        <p style={{fontSize:"2rem"}}>Hello {user} !</p>
      </div>
      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            id="themeSwitch"
            onChange={switchHandle}
            checked={theme === "light"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
