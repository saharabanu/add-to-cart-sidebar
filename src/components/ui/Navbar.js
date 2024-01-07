"use client"

import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

    return (
        <div>
            <h2>This is navbar</h2>
            <button onClick={openCartModal}>Cart</button>

{isCartModalOpen && <Cart onClose={closeCartModal} />}
        </div>
    );
};

export default Navbar;