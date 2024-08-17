import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="/">
          <FiHeart className="nav-icons" />
        </a>
        <a href="/">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <div>
          <Link to="/login">
            <button className="btns">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="btns">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
