import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const baseAppApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8082/api',
    prepareHeaders: (headers, { getState }) => {
      // Retrieve token from localStorage or any other source
      const token = localStorage.getItem('scaler-token');

      if (token) {
        // Set Authorization header dynamically
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['MOVIES' , 'MOVIE'],
  endpoints: () => ({}),
});
