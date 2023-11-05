import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    curentUser: false,
    error:null,
    loading:false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) =>{
            state.loading = true;
        },
        signInSuccess:  (state, action ) =>{
            state.curentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const {signInFailure, signInStart, signInSuccess} = userSlice.actions;
export default userSlice.reducer;