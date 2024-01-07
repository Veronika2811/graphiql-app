import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  buildClientSchema,
  getIntrospectionQuery,
  type IntrospectionQuery,
  printSchema,
} from 'graphql';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getScheme: build.query<string, string>({
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
      transformResponse: ({ data }: { data: IntrospectionQuery }) =>
        printSchema(buildClientSchema(data)),
    }),
  }),
});

export const { useGetSchemeQuery } = apiSlice;
