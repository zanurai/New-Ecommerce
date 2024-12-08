import React from "react";

export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  handleRemoveItem: (id: number) => void;
  handleQuantityChange: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  handleRemoveItem,
}) => {
  return (
    <div className="flex flex-row space-x-5">
      <ul>
        <li className="border border-blue-900 p-5 flex flex-col rounded-lg mt-10 ">
          <img
            src={image}
            alt={name}
            style={{ width: "150px", height: "150px" }}
          />
          <span className="text-gray-800">Product name: {name}</span>
          <span className="text-gray-800">Amount: ${price}</span>

          <button
            onClick={() => handleRemoveItem(id)}
            className="border border-white text-gray-800 p-1  rounded-lg mt-5"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
