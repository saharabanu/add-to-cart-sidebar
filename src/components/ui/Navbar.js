"use client";

import { useState } from "react";
import Cart from "./Cart";
import Link from "next/link";
import { HiLockClosed } from "react-icons/hi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { books } = useSelector((state) => state.cart);

  const toggleCartModal = () => {
    // Toggle the state to open/close the cart
    setIsCartModalOpen((prev) => !prev);
  };


  return (
    <div>
      <div className="bg-red-50 w-full">
        <div className="flex justify-between items-center lg:mx-60 py-3">
          <div>
            <ul className="uppercase flex lg:space-x-5  font-semibold">
              <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                <Link href="/" className="block">
                  fruits
                </Link>
              </li>
              <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                <Link href="/" className="block">
                  menu
                </Link>
              </li>
              <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                <Link href="/" className="block">
                  rewards
                </Link>
              </li>
              <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                <Link href="/">locations</Link>
              </li>
              <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                <Link href="/">gift cards</Link>
              </li>
              <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                <Link href="/">Log in</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button onClick={toggleCartModal} className="pr-3"><p className="flex">
            <HiLockClosed  className="text-2xl"/> <sup className="bg-red-600 px-[3px] py-[1px] text-center flex items-center text-white rounded-lg ml-[-10px]">{books?.length}</sup>
              </p></button>

              {isCartModalOpen && <Cart onClose={toggleCartModal} />}
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg ">Order Now</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
