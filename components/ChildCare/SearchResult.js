import React from "react";
import SearchResultCard from "./SearchResultCard";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const { filterData } = useSelector((state) => state.childCarerFilter);

  return (
    <div>
      {filterData &&
        filterData.length > 0 &&
        filterData.map((item, idx) => (
          <SearchResultCard index={idx} key={idx} item={item} />
        ))}

      <div className="d-flex justify-content-center mt-5">
        <Pagination />
      </div>
    </div>
  );
};

export default SearchResult;
