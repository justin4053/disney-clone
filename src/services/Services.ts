import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../contents/movie'
import requests from "../utils/requests"

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<any,void>({
            query: () => {
                return requests.fetchTrending
            }
        }),
    }),
})

export const { useGetMoviesQuery } = moviesApi
export const moviesApiReducer = moviesApi.reducer