import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//segmento api
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}), //busqueda a esa url base
  reducerPath: "adminApi", //nombre de la ruta
  tagTypes: ["User", "Products"], //etiqueta con valor user
  endpoints: (build) => ({
    getUser: build.query({
      //llamada al user *
      query: (id) => `general/user/${id}`, //consulta x id
      providesTags: ["User"], // relacionamos la etiqueta
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags:["Products"],
    }),
  }),
});

export const {useGetUserQuery,useGetProductsQuery} = api //utilizar consulta de usuario tiene que alinearse *

