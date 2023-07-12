import { rootApi } from "..";
import { Article } from "./type";
import { Category } from "../categories/type";
import { CategoryApi } from "../categories";

export const ArticleApi = rootApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllArticles : builder.query<Article[],void>({
            query: () => `/articles/read`,
            providesTags: [{ type: "ARTICLES", id: "LIST" }]
        }),

        getArticlesByPage : builder.query<Article[],number>({
            query: (pageNumber: number) => `/articles/get/pageNumber?=${pageNumber}`,
            providesTags: (result, error, id) =>[{ type: "ARTICLES", id: "LIST" }]
        }),

        getArticlesByCategory : builder.query<Article[],number | null>({
            query: (categoryId: number | null) => `/${categoryId}/articles`,
            providesTags: (result, error, id) =>[{ type: "ARTICLES", id: "LIST" }]
        }),

        getArticleById: builder.query<Article,number>({
            query: (id: number) => `/articles/${id}`,
            providesTags: (result, error, id) =>[{ type: "ARTICLES", id: "LIST" }]
        }), 

        saveArticle: builder.mutation<Article, Article>({
            query: (body: Article) => ({
                url: `articles/create`,
                method: "POST",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "ARTICLES", id: "LIST" }],
        }),

        updateArticle: builder.mutation<Article, Article>({
            query: (body: Article) => ({
                url: `articles/update/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "ARTICLES", id: "LIST"  }],
        }),

        deleteArticle: builder.mutation<void,number>({
            query: (id: number) => ({
                url: `articles/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [{ type: "ARTICLES", id: "LIST" }],
        }),

        getAllCategories : builder.query<Category[],void>({
            query: () => `/categories/read`,
            providesTags: [{ type: "CATEGORIES", id: "LIST" }]
        }),

        getCategoryById: builder.query<Category,number>({
            query: (id: number) => `/categories/${id}`,
            providesTags: (result, error, id) =>[{ type: "CATEGORIES", id: "LIST" }]
        }), 

        saveCategory: builder.mutation<Category, Category>({
            query: (body: Category) => ({
                url: `/categories/create`,
                method: "POST",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "CATEGORIES", id: "LIST" }],
        }),

        updateCategory: builder.mutation<Category, Category>({
            query: (body:Category ) => ({
                url: `/categories/update/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "CATEGORIES", id: "LIST"  }],
        }),

        deleteCategory: builder.mutation<void,number>({
            query: (id: number) => ({
                url: `/categories/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [{ type: "CATEGORIES", id: "LIST" }],
        })

    }),

    overrideExisting: false,
});



export const { 

    useGetAllArticlesQuery,
    useGetArticlesByPageQuery,
    useGetArticleByIdQuery,
    useSaveArticleMutation,
    useUpdateArticleMutation,
    useDeleteArticleMutation,
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useSaveCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useGetArticlesByCategoryQuery

} = ArticleApi;

