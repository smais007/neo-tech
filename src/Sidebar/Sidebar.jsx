import Brands from "./Brands/Brands";
import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <>
      <sextion className="sidebarr">
        <div className="logo-container">
          <h1>Neo Tech</h1>
        </div>
        <Category />
        <Price />
        <Brands />
      </sextion>
    </>
  );
}
