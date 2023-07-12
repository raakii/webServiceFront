import { rootApi } from "..";
import { Category } from "./type";

export const CategoryApi = rootApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllCategories : builder.query<Category[],void>({
            query: () => `/categories`,
            providesTags: [{ type: "CATEGORIES", id: "LIST" }]
        }),

        getCategoryById: builder.query<Category,number>({
            query: (id: number) => `/categories/${id}`,
            providesTags: (result, error, id) =>[{ type: "CATEGORIES", id: "LIST" }]
        }), 
        saveCategory: builder.mutation<Category, Category>({
            query: (body: Category) => ({
                url: `Categories`,
                method: "POST",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "CATEGORIES", id: "LIST" }],
        }),

        updateCategory: builder.mutation<Category, Category>({
            query: (body:Category ) => ({
                url: `Categories/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "CATEGORIES", id: "LIST"  }],
        }),

        deleteCategory: builder.mutation<void,number>({
            query: (id: number) => ({
                url: `Categories/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [{ type: "CATEGORIES", id: "LIST" }],
        })

    }),

    overrideExisting: false,
});

export const { 

    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useSaveCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,

} = CategoryApi;