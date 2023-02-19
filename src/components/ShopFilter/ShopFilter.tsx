import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SearchField from "./SearchField";
import SortBy from "./SortBy";

type filtereQueries = {
  searchQuery: string;
  categoryQuery: string;
  sortByQuery: string;
};
type Props = {
  getFilterQueries: (value: filtereQueries) => void;
};
type filterType = "category" | "sort" | "searchvalue";

const ShopFilter = ({ getFilterQueries }: Props) => {
  const [categoryQuery, setCategoryQuery] = useState<string>();
  const [sortByValue, setSortByValue] = useState<string>();
  const [searchInputValue, setSearchInputValue] = useState<string>();
  const getFilterQuery = (data: { value: string; type: filterType }) => {
    if (data.type == "category") setCategoryQuery(data.value);
    if (data.type == "sort") setSortByValue(data.value);
    if (data.type == "searchvalue") setSearchInputValue(data.value);
  };

  useEffect(() => {
    getFilterQueries({
      searchQuery: searchInputValue!,
      categoryQuery: categoryQuery!,
      sortByQuery: sortByValue!,
    });
  }, [searchInputValue, categoryQuery, sortByValue]);
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-5 px-10 dark:text-zinc-100">
      <SearchField getFilterQuery={getFilterQuery} />
      <div className="flex items-center justify-center gap-4">
        <CategoryFilter getFilterQuery={getFilterQuery} />
        <SortBy getFilterQuery={getFilterQuery} />
      </div>
    </div>
  );
};

export default ShopFilter;
