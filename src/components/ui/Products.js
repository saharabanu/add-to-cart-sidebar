"use client"


import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cart from "./Cart.js";

const Products = () => {
  const dispatch = useDispatch();
  const {books,total} = useSelector((state)=>state.cart);
   console.log( books,"all items")
  
   const [data, setData ] = useState([]);
   const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

   useEffect(()=>{
    fetch("./products.json")
    .then(res => res.json())
    .then(data => setData(data))
   },[]);

    
    

   const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
        <div>
            <h2>This is product page</h2>
            <div className="grid grid-cols-3 gap-5">
            {data?.map((item)=><div key={item?._id}>
            <div  className="mb-10 z-0">
          <Image
            src={item?.img}
            alt="product img"
            width={200}
            height={200}
            className="w-full h-[300px] rounded-xl product-img"
          />
          <h5 className="text-center text-gray1 pt-4 ">{item?.pTitle}</h5>
          <h6>{item?.price}</h6>
          <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
        </div>
            </div>)}
            </div>

            {isModalOpen && (
        <Cart onClose={closeModal} selectedItem={selectedItem} setSelectedItem={setSelectedItem}>
          
          {/* Add other item details as needed */}
        </Cart>
      )}
        </div>
    );
};

export default Products;