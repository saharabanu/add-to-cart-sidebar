'use client'

import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropdownMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white rounded-md hover:text-red-600"
      >
       <span className="flex items-center">
       Menu<MdOutlineKeyboardArrowDown  className="ml-2"/>
       </span>
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Chicken
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Crisper
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Combos
            </Link>
          </div>
        </div>
      )}
    </div>
    );
};

export default DropdownMenu;