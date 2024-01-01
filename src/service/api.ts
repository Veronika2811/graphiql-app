import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getScheme: build.query<IntrospectionQuery, string>({
      query: (url) => ({
        url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: getIntrospectionQuery(),
        }),
      }),
      transformResponse: ({ data }: { data: IntrospectionQuery }) => data,
    }),
  }),
});

export const { useGetSchemeQuery } = apiSlice;
