import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";
import Admin from "../../pages/Admin";
import { IoSearchOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const Header = () => {
  const { basket, modal, valute, changeValute, dark } = useSelector((a) => a);
  const [inputValue, setInputValue] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  function openModal() {
    dispatch({ type: "OPEN_MODAL", payload: true });
  }
  const toSearch = () => {
    if (inputValue === "") {
      console.log("jok");
    } else {
      nav(`/search/${inputValue}`);
    }
  };
  function sun() {
    dispatch({ type: "DARK" });
  }
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <h1 onClick={() => nav("/")}>BOOkShop</h1>
            <div className="header--nav">
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="Search here"
              />
              <button
                onClick={() => toSearch()}
                style={{
                  background: "white",
                  padding: "8px 10px",
                  borderRadius: "12px",
                }}
                className="text-3xl text-black"
              >
                <IoSearchOutline />
              </button>
              <select
                onChange={(e) =>
                  dispatch({ type: "VALUTE", payload: e.target.value })
                }
              >
                <option value="usd">USD</option>
                <option value="som">SOM</option>
                <option value="rub">RUB</option>
                <option value="eur">EUR</option>
              </select>
              <div className="header--nav__dark">
                {!dark ? (
                  <button onClick={() => sun()}>
                    {<IoMoon color="black" />}
                  </button>
                ) : (
                  <button onClick={() => sun()}>
                    {<FaSun color="black" />}
                  </button>
                )}
              </div>
              <div
                onClick={() => nav("/basket")}
                className="header--nav__bas relative"
              >
                {basket.length ? (
                  <h5 className="absolute bottom-8 left-10 rounded-[50%] bg-red-500 w-6 text-center">
                    {basket.length}
                  </h5>
                ) : null}
                <SlBasket />
                <h6>Корзина</h6>
              </div>
              <div onClick={() => openModal()} className="header--nav__bas">
                <CgProfile />
                <h6>Админ</h6>
              </div>
            </div>
          </div>
          {modal ? <Admin /> : null}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Header;
