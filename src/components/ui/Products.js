"use client";

import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cart from "./Cart.js";
import DropdownMenu from "./DropdownMenu.js";

const Products = () => {
  const dispatch = useDispatch();
  const { books, total } = useSelector((state) => state.cart);
  console.log(books, "all items");

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clickedItems, setClickedItems] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    // Update clickedItems when the cart changes
    const cartItemIds = books.map((item) => item._id);
    setClickedItems((prevClickedItems) =>
      prevClickedItems.filter((clickedItem) =>
        cartItemIds.includes(clickedItem)
      )
    );
  }, [books]);

  const handleAddToCart = (item) => {
    if (!clickedItems.includes(item._id)) {
      dispatch(addToCart(item));
      setSelectedItem(item);
      setIsModalOpen(true);
      setClickedItems([...clickedItems, item._id]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="mx-20 py-16">
        <div className="flex justify-end items-center pr-20 pb-10">
          <DropdownMenu />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {data?.map((item) => (
            <div key={item?._id} className="bg-gray-100 rounded-xl ">
              <div className="">
                <div className=" py-3">
                  <Image
                    src={item?.img}
                    alt="product img"
                    width={340}
                    height={200}
                    className="pl-3 h-72"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className=" text-gray1 pt-4 font-semibold">
                    {item?.pTitle}
                  </h5>
                  <p className="text-gray-500">{item?.price} $ /item</p>
                  <p className="text-gray-500 py-3">{item?.desc} </p>
                </div>

                <div className="px-3 pb-4">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={clickedItems.includes(item._id)}
                    className={`px-4 py-2 border rounded w-full text-sm font-medium text-white ${
                      clickedItems.includes(item._id)
                        ? "bg-gray-500"
                        : "bg-red-500"
                    }`}
                  >
                    {clickedItems.includes(item._id)
                      ? "Added to Cart"
                      : "Add To Cart"}
                  </button>

                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={clickedItems.includes(item._id)}
                    className="px-4 py-2 border-2 rounded w-full text-sm font-medium text-red-500 border-red-500 mt-3 hover:bg-red-500 hover:text-white transition-all duration-300 delay-150"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Cart
          onClose={closeModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        >
          {/* Add other item details as needed */}
        </Cart>
      )}
    </>
  );
};

export default Products;
