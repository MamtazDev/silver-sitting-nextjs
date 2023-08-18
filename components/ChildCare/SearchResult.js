import React, { useState } from "react";
import SearchResultCard from "./SearchResultCard";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const { filterData } = useSelector((state) => state.childCarerFilter);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      {filterData &&
        filterData.length > 0 &&
        filterData
          .slice(startIndex, endIndex)
          .map((item, idx) => (
            <SearchResultCard index={idx} key={idx} item={item} />
          ))}

      <div className="d-flex justify-content-center mt-5">
        {filterData && filterData.length > itemsPerPage && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResult;
