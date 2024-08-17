import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import swal from "sweetalert";

const Nav = ({ handleInputChange, query }) => {
  const { user, logOut } = useContext(AuthContext); 
  console.log('user', user)

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
    swal({
        text: "logout success",
        icon: "success"
      });
}
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
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
        <a>
          {user ? (
            <button 
            onClick={handleSignOut}
            className="button" >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="button">Login</button>
            </Link>
          )}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
