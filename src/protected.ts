import React, { useEffect } from "react";
import { useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/product"); // Redirect to /product if cart is empty
    }
  }, [cartItems, navigate]);

  if (cartItems.length === 0) {
    return null; 
  }

  return children;
};

export default ProtectedRoute;
