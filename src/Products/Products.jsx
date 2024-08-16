import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Products.css";
function Products() {
  return (
    <section className="card-container">
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg"
          alt=""
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />

            <span className="total-reviews">(123 reviews)</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>100</del> 90
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg"
          alt=""
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />

            <span className="total-reviews">(123 reviews)</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>100</del> 90
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg"
          alt=""
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />

            <span className="total-reviews">(123 reviews)</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>100</del> 90
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg"
          alt=""
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />

            <span className="total-reviews">(123 reviews)</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>100</del> 90
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg"
          alt=""
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />
            <AiFillStar className="ratings-star" />

            <span className="total-reviews">(123 reviews)</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>100</del> 90
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
export default Products;
