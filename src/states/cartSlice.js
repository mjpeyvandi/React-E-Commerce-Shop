import { createSlice } from "@reduxjs/toolkit";

const state = []

export const cartSlice = createSlice({
    name: "cart",
    initialState : state,
    reducers : {
        addproduct : ()=>{
            console.log("function")
            
        }
    }
})

export const {addproduct} = cartSlice.actions;
export default cartSlice.reducer