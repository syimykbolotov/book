import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const { products } = useSelector((s) => s);
  const nav = useNavigate();
  const error = () =>
    toast.error("Заполните пустое поле!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const warn = () => {
    toast.warn("Такой продукт уже существует!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const addToProduct = () => {
    let pro = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      img,
      title,
      category,
      price,
      description,
      quantity: 1,
    };
    let res = [...products, pro];
    localStorage.setItem("productBook", JSON.stringify(res));
    if (
      img.trim() === "" ||
      title.trim() === "" ||
      category.trim() === "" ||
      price.trim() === "" ||
      description.trim() === ""
    ) {
      error();
    } else if (products.find((el) => el.title === title)) {
      warn();
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: pro });
      setTitle("");
      setCategory("");
      setPrice("");
      setDescription("");
      // succes();
    }
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImg(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div id="addProduct">
      <button
        onClick={() => nav("/adminProducts")}
        type="button"
        className="text-white bg-gradient-to-br absolute bottom-6 left-6 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Admin Products
      </button>

      <div className="container">
        <h1 style={{ fontSize: "1px" }}>k</h1>
        <div className="addProduct">
          <input onChange={onChange} className="addProduct--file" type="file" />
          <div className="addProduct--load">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="addProduct--load__photo"
              value={title}
              type="text"
              placeholder="Product Name"
            />
            <div className="addProduct--load__categories">
              <input
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                type="text"
                placeholder="Category"
              />
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"
                placeholder="Price"
              />
            </div>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="addProduct--load__description"
              value={description}
              type="text"
              placeholder="Product description"
            />
            <button onClick={() => addToProduct()}>SAVE</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddProduct;
