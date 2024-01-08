"use client";

import { useEffect, useState } from "react";
import Cart from "./Cart";
import Link from "next/link";
import { HiLockClosed } from "react-icons/hi";
import { useSelector } from "react-redux";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { books } = useSelector((state) => state.cart);


// for toggle cat btn
  const toggleCartModal = () => {
    setIsCartModalOpen((prev) => !prev);
  };

  // for responsive navbar

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // set toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div>
      <div className="bg-red-50 w-full">
        {/* for large device */}
        <div className="lg:flex  hidden justify-between items-center lg:ml-36 lg:mr-80 py-3">
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
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:border-red-500 hover:border hover:bg-transparent hover:text-red-500">Order Now</button>
           
          </div>
        </div>
        <div className="md:hidden flex justify-around items-center">
        <Link href="/" className="hover:text-red-600 duration-300 delay-150 transition-all font-bold text-xl">
                  fruits
                </Link>
            <button
              className=" text-bluePrimary  focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaXmark className="h-6 w-6 " /> : <FaBars />}
            </button>
           
          </div>
        

        {/* for mobile device */}

        <div
          className={`space-y-4  mt-6 py-7 bg-gray-100 ${
            isMenuOpen
              ? "block fixed top-0 right-0 left-0 text-center"
              : "hidden"
          }`}
        >
         
         <div className="lg:hidden   lg:ml-36 lg:mr-80 py-3">
          <div>
            <ul className="uppercase  space-y-3  font-semibold">
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
          <div className="">
            <button onClick={toggleCartModal} className="pr-3"><p className="flex">
            <HiLockClosed  className="text-2xl"/> <sup className="bg-red-600 px-[3px] py-[1px] text-center flex items-center text-white rounded-lg ml-[-10px]">{books?.length}</sup>
              </p></button>

              {isCartModalOpen && <Cart onClose={toggleCartModal} />}
              <br></br>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:border-red-500 hover:border hover:bg-transparent hover:text-red-500">Order Now</button>
           
          </div>
        </div>
        
         
        </div>


      </div>
    </div>
  );
};

export default Navbar;
