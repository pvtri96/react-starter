import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2996/api" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: [{ type: "users", id: "LIST" }],
    }),
    createUser: builder.mutation({
      query: ({ user }) => ({
        url: `/user/`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: [{ type: "users", id: "LIST" }],
    }),
    updateUser: builder.mutation({
      query: ({ userId, user }) => ({
        url: `/user/${userId}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: [{ type: "users", id: "LIST" }],
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "users", id: "LIST" }],
    }),
  }),
});

export const userApiReducer = userApi.reducer;
export const userApiMiddleware = userApi.middleware;
export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
