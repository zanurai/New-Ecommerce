import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { RootState } from "@/store";
import { DashboardProps } from "@/types/type";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addProduct, editProduct } from "@/auth/productslice";


const Dashboard: React.FC<DashboardProps> = ({ productToEdit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(productToEdit ? productToEdit.name : "");
  const [price, setPrice] = useState(productToEdit ? productToEdit.price : 0);
  const [image, setImage] = useState<string | null>(null);
  const { vendorName } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (name && price) {
      const productData = {
        id: productToEdit ? productToEdit.id : Date.now(),
        name,
        price,
        vendor: vendorName!,
        image: image || productToEdit?.image || "",
      };

      if (productToEdit) {
        dispatch(editProduct(productData));
      } else {
        dispatch(addProduct(productData));
      }
      navigate("/product");
    } else {
      console.error("Product name and price are required.");
    }
    alert("Product saved successfully!");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-sm:px-3 p-10 min-h-screen flex flex-col">
      <h2 className="text-center text-[30px] font-bold text-white">
        {productToEdit ? "Edit Product" : "Add Product"}
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-20 mt-5">
        <div className="max-lg:w-full flex lg:flex-1 flex-col bg-blue-950 bg-opacity-10 p-10 rounded-lg shadow-xl gap-10">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-lg:w-full border border-gray-400 px-2 py-3 pl-4 rounded-lg bg-gray-200"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="max-lg:w-full border border-gray-400 px-2 py-3 pl-4 rounded-lg bg-gray-200"
          />
        </div>
        <div className=" max-lg:w-full lg:flex-1  border border-dashed border-blue-900">
          <label
            htmlFor="imageUpload"
            className="cursor-pointer flex items-center gap-5 lg:gap-20 lg:px-10 px-5 py-10 "
          >
            <div
              className="w-32 h-32 border border-dashed border-gray-300 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: image ? `url(${image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {!image && <span className="text-gray-500">Upload Image</span>}
            </div>
            <p className="text-white text-center text-[20px]">
              Upload the <span className="text-blue-800 font-bold">Image</span>{" "}
              of <span className="text-blue-800 font-bold">Product</span>
            </p>
          </label>
        </div>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="border px-2 py-3 text-white bg-blue-900 rounded-lg ml-auto"
      >
        {productToEdit ? "Edit Product" : "Add Product"}
      </button>
    </div>
  );
};

export default Dashboard;
