import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Products from "../Products";

const ProductDetails = () => {
  window.scroll(0, 0);
  const { products } = useSelector((s) => s);
  const { proId } = useParams();
  const [count] = useState(5);
  let findDet = products.find((el) => el.id === +proId);

  return (
    <div id="productDetails">
      <div className="container">
        <div className="productDetails">
          <img src={findDet.img} alt="img" />
          <div className="productDetails--text">
            <h1>{findDet.title}</h1>
            <h1>
              {findDet.price} <span style={{ fontSize: "28px" }}>COM</span>
            </h1>
            <h2>Жанр: {findDet.category}</h2>
            <h3>Описание</h3>
            <h4>{findDet.description}</h4>
          </div>
        </div>
        <h1 style={{ fontSize: "36px", margin: "30px 0", color: "#001049" }}>
          Возможно, Вам понравится
        </h1>
        <div className="flex gap-8">
          {products.slice(0, count).map((el) => (
            <Products el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
