import { configureStore } from "@reduxjs/toolkit";
import { ArticleApi } from "../services/api/articles";
import { CategoryApi } from "../services/api/categories";
import cartReducer from "../features/cartSlice";

const store = configureStore({
    reducer: {
        [ArticleApi.reducerPath]: ArticleApi.reducer,
        cart:cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ArticleApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;

export default store;