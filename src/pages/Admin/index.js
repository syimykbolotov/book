import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import spinner from "../../assets/img/spinner.svg";

const Admin = () => {
  const error = () =>
    toast.error("Неправильный пароль!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const nav = useNavigate();
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: "OPEN_MODAL", payload: false });
  };
  const password = "123";
  function goLoad() {
    if (password === pass) {
      setLoading(true);
      setTimeout(() => {
        nav("/addProduct");
        dispatch({ type: "OPEN_MODAL", payload: false });
      }, 2000);
      setLoading(true);
    } else {
      error();
    }
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <TiDelete onClick={() => openModal()} className="admin--rem" />
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password..."
          />
          <button onClick={() => goLoad()}>SIGN IN</button>
          <img
            src={spinner}
            alt="img"
            style={{
              border: "50%",
              position: "absolute",
              top: "100px",
              display: loading ? "block" : "none",
              zIndex: "499",
            }}
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Admin;
