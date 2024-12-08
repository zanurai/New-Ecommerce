import React from "react";

import { useNavigate } from "react-router-dom";

import CartItem from "./cart-item";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeItemFromCart, updateCartQuantity } from "@/auth/cartslice";
import { IoMdArrowRoundBack } from "react-icons/io";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClickBack = () => {
    navigate("/");
  };
  return (
    <div className="p-10 min-h-screen flex flex-col">
      <h2 className="flex item-center justify-center text-[30px] font-bold text-white mb-14 ">
        Shopping Cart
      </h2>
      <div className="flex items-center">
        <button
          className="border border-blue-900 px-2 py-1 rounded-lg text-blue-900 mr-auto"
          onClick={handleClickBack}
        >
          <IoMdArrowRoundBack className="text-[25px]" />
        </button>

        <div>
          <p className="flex item-center text-[19px] font-bold text-blue-800">
            Total Amount: ${totalAmount}
          </p>
        </div>
      </div>
      <ul className="flex flex-row space-x-5">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image || ""}
            handleRemoveItem={handleRemoveItem}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
