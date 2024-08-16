import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Filter by Brands</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
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
          <Button onClickHandler={handleClick} value="Google" title="Google" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
