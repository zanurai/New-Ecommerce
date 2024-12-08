import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleClickViewCart = () => {
    navigate("/cart");
  };

  const handleClickLogo = () => {
    navigate("/")
  }

  return (
    <section className="sticky top-0 bg-gray-100">
      <div className="container mx-auto  py-5 ">
        <div className="flex justify-between items-center max-sm:px-3">
          <h1
            className="text-h3 bg-blue-950 font-semibold text-white w-[110px] py-2 px-2  rounded-lg cursor-pointer"
            onClick={handleClickLogo}
          >
            e-commerce
          </h1>

          <button
            className={`border border-blue-700 rounded-lg p-2 text-blue-700 ${
              cartItems.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "border-blue-900"
            }`}
            disabled={cartItems.length === 0}
            onClick={handleClickViewCart}
          >
            View Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
