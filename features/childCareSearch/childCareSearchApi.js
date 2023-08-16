const { apiSlice } = require("../api/apiSlice");

export const childCareSearchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchedChildCarer: builder.mutation({
      query: ({ filterCriteria, data }) => ({
        url: `http://localhost:8000/api/search?${new URLSearchParams(
          filterCriteria
        ).toString()}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetSearchedChildCarerMutation } = childCareSearchApi;
