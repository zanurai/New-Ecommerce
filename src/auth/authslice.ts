import { AuthState } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: AuthState = {
    isLoggedIn: false,
    vendorName: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.vendorName = action.payload;
        },

        logout(state) {
            state.isLoggedIn = false;
            state.vendorName = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer