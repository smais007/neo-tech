import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="Black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="Green"
          title="Green"
          name="test1"
          color="green"
        />

        <Input
          handleChange={handleChange}
          value="Gray"
          title="Gray"
          name="test1"
          color="gray"
        />

        {/* <Input
          handleChange={handleChange}
          value="White"
          title="White"
          name="test1"
          color="white"
        /> */}

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
