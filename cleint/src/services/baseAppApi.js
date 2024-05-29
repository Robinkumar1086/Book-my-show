import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const token = localStorage.getItem("scaler-token")
export const baseAppApi = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8082/api',
        headers: {
            'Authorization': `Bearer ${token}`
          },
    }),
    tagTypes: ['MOVIES'],
    endpoints:()=>({})
});