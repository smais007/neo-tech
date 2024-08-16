import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick, handleSortChange }) => {
  return (
    <>
      <div className="top-bar">
        <div>
          <h2 className="recommended-title">Filter by Brands</h2>
          <div className="recommended-flex">
            <Button
              onClickHandler={handleClick}
              value=""
              title="All Products"
            />
            <Button onClickHandler={handleClick} value="Apple" title="Apple" />
            <Button
              onClickHandler={handleClick}
              value="Samsung"
              title="Samsung"
            />
            <Button
              onClickHandler={handleClick}
              value="Microsoft"
              title="Microsoft"
            />
            <Button
              onClickHandler={handleClick}
              value="Google"
              title="Google"
            />
          </div>
        </div>
        <div className="sort">
          <h2 className="recommended-title">Filter by Brands</h2>

          <select onChange={handleSortChange} className="sort-flex btns">
            <option value="">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Recommended;
