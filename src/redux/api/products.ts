import { IProduct } from "../../types";
import { api } from "./index";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/products",
    }),
    getSingleProduct: build.query<IProduct, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;
