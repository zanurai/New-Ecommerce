import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../auth/authslice";
import { useNavigate } from "react-router-dom";

const VendorLogin: React.FC = () => {
  const navigate = useNavigate();
  const [vendorName, setVendorName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(vendorName));
    alert("hello");
    navigate("/");
  };

  return (
    <div className=" bg-blue-950 min-h-screen flex flex-col ">
      <h1 className="text-[36px] font-bold text-center mt-10 text-white">
        Vendor Login
      </h1>
      <div className="flex items-center justify-center gap-5 mt-10">
        <input
          type="text"
          placeholder="Vendor Name"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          className="border py-2 pl-3 pr-10 text-left rounded-lg custom-shadow"
        />
        <button
          className="border py-2 px-5 text-white rounded-lg custom-shadow"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default VendorLogin;
