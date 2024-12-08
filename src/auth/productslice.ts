import { Product } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface ProductState {
  product: Product[];
}

const initialState: ProductState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      console.log("Adding product:", action.payload); 
      state.product.push(action.payload);
    },
    editProduct(state, action: PayloadAction<Product>) {
      console.log("Editing product:", action.payload); // Debugging
      const index = state.product.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.product[index] = action.payload;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      console.log("Removing product with id:", action.payload); 
      state.product = state.product.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, editProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
