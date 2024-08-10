import { baseAppApi } from "./baseAppApi"

export const movieServices = baseAppApi.injectEndpoints({
    endpoints: (build) => ({
        getAllMovies: build.query({ // GET
            query: () => '/movies/get-all-movies',
            transformResponse: (apiResponse) => apiResponse.data,
            providesTags: ['MOVIES']
        }),
        getSingleMovieById : build.query({
            query : (id)=>`/movies/get-movie-by-id/${id}`,
            transformResponse : (apiResponse) => apiResponse.data,
            providesTags: ['MOVIES'] 
        }),
        addNewMovie : build.mutation({
            query : (payload)=> ({
                url: '/movies/add-movie',
                method: 'POST' ,
                body :payload,
            }),
            invalidatesTags : ['MOVIES']
        }),

    }),
    overrideExisting: false,
})

export const { useGetAllMoviesQuery , useGetSingleMovieByIdQuery , useAddNewMovieMutation} = movieServices