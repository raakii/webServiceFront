import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
    id: string,
    description?: string,
    content: string,
    title: string,
    category: number,
    image: any
};

interface PageState {
    articles: Article[],
    pageNumber: number,
    category: number | null,
};

const initialState: PageState = {
    articles: [], pageNumber: 0, category: null
};

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setPrecedentPage: (state) => {
            state.pageNumber --;
            console.log ("prev");
          },

        setNextPage: (state) =>{
            state.pageNumber++;
            console.log ("next");
        }
    }
});

export const articleActions = articleSlice.actions;

export default articleSlice.reducer;
