import { baseAppApi } from "./baseAppApi"

export const movieServices = baseAppApi.injectEndpoints({
    endpoints: (build) => ({
        getAllMovies: build.query({ // GET
            query: () => '/movies/get-all-movies',
            transformResponse: (apiResponse) => apiResponse.data,
            providesTags: ['MOVIES']
        }),

    }),
    overrideExisting: false,
})

export const { useGetAllMoviesQuery} = movieServices