import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

const Search = () => {
  const { products } = useSelector((s) => s);
  const { proName } = useParams();
  let findSearch = products.find((el) => el.title === proName);
  let { id, img, title, price, category } = findSearch;
  return (
    <div id="products">
      <div className="container">
        <div className="products">
          <div className="products--blocks">
            <Link to={`/productDetails/${id}`}>
              <img src={img} alt="img" />
            </Link>
            <div className="products--blocks__price">
              <h3>{price} сом</h3>
              <SlBasket
                style={{ fontSize: "24px" }}
                // onClick={() => addToBasket(el)}
              />
            </div>
            <h5>
              {title} / {category}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
