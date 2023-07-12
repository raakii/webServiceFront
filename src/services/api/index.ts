import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),
    endpoints: (builder) => ({}),
    tagTypes: ["ARTICLES", "CATEGORIES"]
})