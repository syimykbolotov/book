import React from "react";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = ({ el }) => {
  const { basket, changeValute, valute, valuteSymbol, dark } = useSelector(
    (s) => s
  );
  const dispatch = useDispatch();
  const addToBasket = (data) => {
    dispatch({ type: "ADD_BASKET", payload: data });
  };
  let bas = basket.some((some) => some.id === el.id);
  return (
    <div id="products">
      <div className="container">
        <div className="products">
          <div
            className="products--blocks"
            style={{
              border: dark ? "2px solid white" : "2px solid black",
              color: dark ? "white" : "black",
            }}
          >
            <Link to={`/productDetails/${el.id}`}>
              <img src={el.img} alt="img" />
            </Link>
            <div className="products--blocks__price">
              <h3>
                {el.price === "1"
                  ? el.price * valute[changeValute]
                  : Math.trunc(el.price * valute[changeValute])}{" "}
                {valuteSymbol[changeValute]}{" "}
              </h3>
              {!bas ? (
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
                >
                  <SlBasket
                    style={{ fontSize: "14px" }}
                    onClick={() => addToBasket(el)}
                  />
                </button>
              ) : (
                <Link to="/basket" className="">
                  <button
                    type="button"
                    className="text-gray-900 mx-auto bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
                  >
                    <SlBasket
                      style={{ fontSize: "14px" }}
                      onClick={() => addToBasket(el)}
                    />
                  </button>
                </Link>
              )}
            </div>
            <h5>
              {el.title?.slice(0, 11)} / {el.category}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
