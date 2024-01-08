"use client";

import {
  addToCart,
  removeFromCart,
  removeOneBook,
} from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiLockClosed } from "react-icons/hi";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const Cart = ({ onClose, children }) => {
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

  // Per total Price {item?.quantity * item?.price}
  return (
    <div className="bg-gray-100 w-72 space-y-4 h-screen  right-0 top-0 fixed">
      {/* firat parrt */}
      <div className=" flex justify-between items-center px-2 pt-4">
        <h2 className="flex items-center text-red-500">
          <HiLockClosed className="text-2xl" />{" "}
          <span className="pl-3">{books?.length} Items</span>
        </h2>
        <button
          className="border text-red-500 border-red-500 px-3 rounded-lg hover:bg-red-500 hover:text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      {/* second part cart items */}
      <div className="bg-red-500 h-[480px]">
        <div className="grid grid-cols-1 px-2 py-3">
          {books?.map((item) => (
            <div key={item?._id}>
              <div className="border border-white px-2 relative mb-3">
               <div className="flex justify-between ">

               <div className="flex items-center py-4">
                  <div className="pr-3">
                    <Image
                      src={item?.img}
                      alt="product-img"
                      width={100}
                      height={20}
                    className="h-[100px]"/>
                  </div>
                  <div className="text-white">
                    <div>
                      {" "}
                      <p>{item?.pTitle}</p>
                      <p>{item?.price}</p>
                    </div>
                    <div className="flex items-center space-x-1 font-semibold">
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
                  </div>
                </div>


                <div className=" text-white ">
                  <div className="">
                  <p className="absolute right-3 bottom-3 font-bold">{item?.quantity * item?.price} $</p>
                  </div>

                </div>
               </div>
               <button
                className="text-red-500 font-bold border bg-gray-100 rounded p-1 absolute right-0 top-[-6px] "
                onClick={() => dispatch(removeFromCart(item))}
              >
               <MdDelete />
              </button>
              </div>

              
            </div>
          ))}

        
          {children}
        </div>
      </div>

      {/* last part */}
      <div>
        <h4 className="font-bold text-red-500 text-center">
          {" "}
          Order Place {total.toFixed(2)} $
        </h4>
      </div>
    </div>
  );
};

export default Cart;
