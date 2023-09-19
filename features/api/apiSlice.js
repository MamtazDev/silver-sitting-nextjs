import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://16.171.138.157:8000",
  }),
  tagTypes: ["User", "Messages"],
  endpoints: (builder) => ({}),
});
