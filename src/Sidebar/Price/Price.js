import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={100}
          title="$0 - 100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={500}
          title="$100 - $500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000}
          title="$500 - $1000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000}
          title="Over $1000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
