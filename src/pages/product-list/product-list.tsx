import React from "react";

import { useNavigate } from "react-router-dom";

import { Product } from "@/types/type";
import { addItemToCart } from "@/auth/cartslice";
import { removeProduct } from "@/auth/productslice";
import { useAppDispatch, useAppSelector } from "@/hooks";

import { IoMdArrowRoundBack } from "react-icons/io";

const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.products.product);

  const { vendorName } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleClickBack = () => {
    navigate("/");
  };

  const handleAddToCart = (product: Product) => {
    dispatch(
      addItemToCart({
        ...product,
        image: product.image ?? "",
        quantity: product.quantity || 1,
      })
    );
    alert("Successfully add to cart");
  };

  return (
    <div className="p-10 min-h-screen flex flex-col">
      <h2 className="text-[30px] font-bold text-white text-center">
        Product List
      </h2>

      <ul className="flex flex-row flex-wrap items-center justify-center gap-10 mt-10 mr-auto">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center justify-center gap-2 border border-blue-900 rounded-lg p-5"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              )}
              <p className="flex gap-2 mt-2">
                <span className="text-gray-800 text-[20px]">
                  {product.name} Rs:{product.price}
                </span>
                {vendorName === product.vendor && (
                  <button
                    onClick={() => dispatch(removeProduct(product.id))}
                    className="border p-1 text-gray-800 rounded-lg"
                  >
                    Remove
                  </button>
                )}
              </p>
              <div className="flex gap-3 item-center text-gray-800 text-[14px] font-bold border-t pt-2 mt-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="border rounded-lg border-blue-900 p-2"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))
        ) : (
        
            <p className="text-white  text-xl mb-4">No Product</p>
         
        )}
      </ul>
      <div className="flex gap-5 items-center justify-center mt-10">
        <button
          className="border border-blue-900 px-2 py-1 rounded-lg text-blue-900 mr-auto"
          onClick={handleClickBack}
        >
          <IoMdArrowRoundBack className="text-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
