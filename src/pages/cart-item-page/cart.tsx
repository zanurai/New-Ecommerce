import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { removeItemFromCart, updateCartQuantity } from "../../auth/cartslice";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate()
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
    navigate("/")
  }
  return (
    <div className="p-10 bg-blue-950 min-h-screen flex flex-col">
      <h2 className="flex item-center justify-center text-[30px] font-bold text-white ">
        Shopping Cart
      </h2>
      <div className="flex justify-end">
        <button
          className="text-white border border-white p-2 rounded-lg"
          onClick={handleClickBack}
        >
          back
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center min-h-screen overflow-hidden ">
          <p className="text-white text-center">Your cart is empty</p>
        </div>
      ) : (
        <div>
          <p className="flex item-center justify-end  text-white">
            Total Amount: ${totalAmount}
          </p>
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
      )}
    </div>
  );
};

export default Cart;
