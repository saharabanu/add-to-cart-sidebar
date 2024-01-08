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
 

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clickedItems, setClickedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    
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
  // for filtering data
  const filteredData = selectedCategory
    ? data.filter((item) => item?.pTitle === selectedCategory)
    : data;
  return (
    <>
      <div className="mx-20 py-5">
        <div className="flex justify-end items-center lg:pr-56 py-10">
          <DropdownMenu />
        </div>
        <div className="">
        <div className="grid lg:grid-cols-4 gap-4 ">
          {data?.map((item) => (
            <div key={item?._id} className="bg-gray-100 rounded-xl relative">
               <div>
                 
                  <h2 className="capitalize bg-red-500 text-center w-16 text-white  rounded-full absolute top-[-5px] left-[-20px] -rotate-45">new</h2>
                </div>
              <div className="">
                <div className="pt-3">
                  <Image
                    src={item?.img}
                    alt="product img"
                    width={340}
                    height={200}
                    className="px-2 h-60"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className=" text-gray1 pt-4 font-semibold">
                    {item?.pTitle}
                  </h5>
                  <p className="text-gray-500">{item?.price} $ /item</p>
                  <p className="text-gray-500 py-3 text-sm lowercase">{item?.desc.slice(0,60)}..... </p>
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
        
      </div>
     <div className="relative flex justify-end ">
     {isModalOpen && (
        <Cart
          onClose={closeModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        >
         
        </Cart>
      )}
     </div>
    </>
  );
};

export default Products;
