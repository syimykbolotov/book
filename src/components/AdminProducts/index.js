import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const AdminProducts = () => {
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();
  const del = (data) => {
    dispatch({ type: "DELETE_ADMIN", payload: data.id });
  };

  return (
    <div id="products">
      <div className="container h-[54vh]">
        <div className="products flex gap-7 flex-wrap">
          {products.map((el) => (
            <div className="products--blocks">
              <img src={el.img} alt="img" />
              <div className="products--blocks__price">
                <h3>{el.price} сом</h3>
                <button
                  onClick={() => del(el)}
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
                >
                  <MdDelete style={{ fontSize: "14px" }} />
                </button>
              </div>
              <h5>
                {el.title.slice(0, 11)} / {el.category}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
