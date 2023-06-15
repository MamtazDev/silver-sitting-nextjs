import React from "react";
import SearchResultCard from "./SearchResultCard";
import Pagination from "../Pagination/Pagination";

const SearchResult = () => {
  return (
    <div>
      {[0, 1, 2, 3].map((item, idx) => (
        <SearchResultCard />
      ))}

      <div className="d-flex justify-content-center mt-5">
        <Pagination />
      </div>
    </div>
  );
};

export default SearchResult;
