import { useState } from "react";

import { addProduct, editProduct } from "../../auth/productslice";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";

export interface DashboardProps {
  productToEdit?: {
    id: number;
    name: string;
    price: number;
    vendor: string;
    image: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ productToEdit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(productToEdit ? productToEdit.name : "");
  const [price, setPrice] = useState(productToEdit ? productToEdit.price : 0);
  const [image, setImage] = useState<File | null>(null);
  const { vendorName } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (name && price) {
      const productData = {
        id: productToEdit ? productToEdit.id : Date.now(),
        name,
        price,
        vendor: vendorName!,
        image: image ? URL.createObjectURL(image) : productToEdit?.image || "",
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
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="p-10 bg-blue-950 min-h-screen flex flex-col">
      <h2 className="text-center text-[30px] font-bold text-white">
        {productToEdit ? "Edit Product" : "Add Product"}
      </h2>
      <div className="flex justify-center gap-10 mt-5">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-3 pl-4 rounded-lg bg-gray-200"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border px-2 py-3 pl-4 rounded-lg bg-gray-200"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border px-2 py-3 pl-4 rounded-lg bg-gray-200"
        />
        <button
          onClick={handleSubmit}
          className="border px-2 py-3 text-white bg-green-500 rounded-lg"
        >
          {productToEdit ? "Edit Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
