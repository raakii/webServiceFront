import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../services/api/articles/type";

interface CartItem {
    id: string,
    description?: string,
    name: string,
    image: any
};

interface PageState {
    pageNumber: number,
    category: number | null,
};

const initialState: PageState = {
    pageNumber: 0, category: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setPrecedentPage: (state) => {
            
            state.pageNumber --;
            
          },

        setNextPage: (state) => {
            state.pageNumber++;
            
        }, 
        setCategory: (state,action) => {
            state.category = action.payload;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
