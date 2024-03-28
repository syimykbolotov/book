import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import heroImg5 from "../../assets/img/hero5.avif";
import category1 from "../../assets/img/category1.png";
import category2 from "../../assets/img/category2.png";
import category3 from "../../assets/img/category3.png";
import category4 from "../../assets/img/category4.png";
import paris from "../../assets/img/paris.png";
import not from "../../assets/img/not.png";
import just from "../../assets/img/just.png";
import choice from "../../assets/img/choice.png";
import braind from "../../assets/img/braind.png";
import { SlBasket } from "react-icons/sl";
import Products from "../../pages/Products";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { products, dark } = useSelector((s) => s);
  const [count, setCount] = useState(5);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const go = (data) => {
    dispatch({ type: "CAT", payload: data });
    nav("/category");
  };

  return (
    <div id="hero">
      <img src={heroImg5} alt="img" />
      <div className="container">
        <h1
          style={{
            margin: "20px 0",
            color: dark ? "white" : "#010049",
            fontSize: "24px",
          }}
        >
          Категории
        </h1>
        <div className="hero">
          <div className="hero--categories">
            <div className="hero--categories__heroBlock">
              <img onClick={(e) => go("Детектив")} src={category1} alt="img" />
            </div>
            <div className="hero--categories__heroBlock">
              <img
                onClick={(e) => go("Фантастика")}
                src={category2}
                alt="img"
              />
            </div>
            <div className="hero--categories__heroBlock">
              <img
                onClick={(e) => go("Приключения")}
                src={category3}
                alt="img"
              />
            </div>
            <div className="hero--categories__heroBlock">
              <img onClick={(e) => go("Научная")} src={category4} alt="img" />
            </div>
          </div>
          <div className="hero--title">
            <h1>Возможно, Вам понравится</h1>
            <select
              onChange={(e) =>
                dispatch({ type: "SORT_PRODUCT", payload: e.target.value })
              }
            >
              <option value="expensive">Expensive</option>
              <option value="cheap">Cheap</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
          <div className="hero--blocksUp">
            <div className="hero--blocksUp__book">
              <img src={not} alt="img" />
              <div className="hero--blocksUp__book--price">
                <h3>1200 сом</h3>
                <SlBasket />
              </div>
              <h5>Джинсы момсы / банан</h5>
            </div>
            <div className="hero--blocksUp__book">
              <img src={choice} alt="img" />
              <div className="hero--blocksUp__book--price">
                <h3>670 сом</h3>
                <SlBasket />
              </div>
              <h5>Футболка оверсайз / универсал</h5>
            </div>
            <div className="hero--blocksUp__book">
              <img src={braind} alt="img" />
              <div className="hero--blocksUp__book--price">
                <h3>1350 сом</h3>
                <SlBasket />
              </div>
              <h5>Детский свитер / зимний</h5>
            </div>
            <div className="hero--blocksUp__book">
              <img src={just} alt="img" />
              <div className="hero--blocksUp__book--price">
                <h3>2100 сом</h3>
                <SlBasket />
              </div>
              <h5>Мужской обувь / классика</h5>
            </div>
            <div className="hero--blocksUp__book">
              <img src={paris} alt="img" />
              <div className="hero--blocksUp__book--price">
                <h3>2100 сом</h3>
                <SlBasket />
              </div>
              <h5>Футболка нарядная / летняя</h5>
            </div>
          </div>
          <div className="hero--blocksBottom">
            {products.slice(0, count).map((el) => (
              <Products el={el} />
            ))}
          </div>
          <button
            className="heroBtn"
            onClick={
              products.length === count
                ? () => setCount(5)
                : () => setCount(count + 5)
            }
          >
            {products.length === count ? "short" : "more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
