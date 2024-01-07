"use client";

import {
  addToCart,
  removeFromCart,
  removeOneBook,
} from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ onClose, children, selectedItem, setSeletedItem }) => {
  const { books, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //   console.log(books, "all items");

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(removeOneBook(item));
  };
  return (
    <div>
      <h2>This is cart {books?.length}</h2>
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={onClose}>
            &times;
          </button>

          <h3>Selected Item</h3>

          {books?.map((item) => (
            <div key={item?._id}>
              <p>
                {item?.price} Per total Price {item?.quantity * item?.price}
              </p>
              <p>{item?.pTitle}</p>
              <div className="flex items-center space-x-3 font-semibold">
                <button
                  className="border px-2"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
                <h5>{item?.quantity}</h5>
                <button
                  className="border px-2"
                  onClick={() => handleDecrement(item)}
                >
                  {" "}
                  -
                </button>
              </div>

              <h2>{total.toFixed(2)}</h2>

              <button
                className="text-red-500 font-bold"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove
              </button>
            </div>
          ))}

          {/* <p>Title: {selectedItem?.pTitle}</p>
          <p>Price: {selectedItem?.price}</p> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Cart;
