import Input from "../../components/Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="accessory"
          title="Accessory"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="camera"
          title="Camera"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="earphone"
          title="Eearphone"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="laptop"
          title="Laptop"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="phone"
          title="Phone"
          name="test"
        />
        <Input handleChange={handleChange} value="tv" title="TV" name="test" />

        <Input
          handleChange={handleChange}
          value="watch"
          title="Watch"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
