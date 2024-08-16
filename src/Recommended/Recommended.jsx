import "./Recommended.css";

export default function Recommended() {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button value="" title="All Products" className="btns">
            Hello
          </button>
          <button className="btns" value="Nike" title="Nike">
            Hello
          </button>
          <button className="btns" value="Adidas" title="Adidas">
            Hello
          </button>
          <button className="btns" value="Puma" title="Puma">
            Hello
          </button>
          <button className="btns" value="Vans" title="Vans">
            Hello
          </button>
        </div>
      </div>
    </>
  );
}
