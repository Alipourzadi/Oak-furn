import { productType } from "./productType";

type filtereQueries = {
  searchQuery: string | null;
  categoryQuery: string | null;
  sortByQuery: string | null;
  type?: string | null;
};

export default function getFiltereData(
  data: productType[],
  query: filtereQueries
): productType[] {
  let filteredData = data;

  if (query.type) {
    filteredData = filteredData.filter((item) => item.type == query.type);
  }
  if (query.categoryQuery) {
    filteredData = filteredData.filter(
      (item) => item.category == query.categoryQuery
    );
  }
  if (query.searchQuery?.length! > 0) {
    filteredData = filteredData.filter((item) =>
      item.productName.toLowerCase().includes(query.searchQuery!.toLowerCase())
    );
    console.log("2");
  }
  if (query.sortByQuery) {
    if (query.sortByQuery == "ascending")
      filteredData.sort((a, b) => a.price - b.price);
    if (query.sortByQuery == "descending")
      filteredData.sort((a, b) => b.price - a.price);
    console.log("3");
  }

  return filteredData;
}
