import { api } from "./index";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    signInClient: build.mutation<any, any>({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
    }),
    checkToken: build.query<any, void>({
      query: () => ({
        url: "user/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const { useSignInClientMutation, useCheckTokenQuery } = extendedApi;
