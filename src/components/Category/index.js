import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

const Category = () => {
  const { products, cat } = useSelector((s) => s);
  const dispatch = useDispatch();
  const addToBasket = (data) => {
    dispatch({ type: "ADD_BASKET", payload: data });
  };
  return (
    <div id="category">
      <div className="container">
        <div className="category flex gap-10">
          {products.map((el) =>
            el.category === cat ? (
              <div id="products" key={el.id}>
                <div className="container">
                  <div className="products">
                    <div className="products--blocks">
                      <Link to={`/productDetails/${el.id}`}>
                        <img src={el.img} alt="img" />
                      </Link>
                      <div className="products--blocks__price">
                        <h3>{el.price} сом</h3>
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
                        >
                          <SlBasket
                            style={{ fontSize: "14px" }}
                            onClick={() => addToBasket(el)}
                          />
                        </button>
                      </div>
                      <h5>
                        {el.title.slice(0, 11)} / {el.category}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
