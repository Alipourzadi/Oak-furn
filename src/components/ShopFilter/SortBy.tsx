type filterType = "category" | "sort" | "searchvalue";

type Props = {
  getFilterQuery: (data: { value: string; type: filterType }) => void;
};

const SortBy = ({ getFilterQuery }: Props) => {
  const getDropDownValue = (e: any) => {
    const value = e.target.value;
    console.log(value);
    getFilterQuery({ value, type: "sort" });
  };
  return (
    <div className="flex items-start justify-start space-x-3 text-sm md:text-base">
      <label className="">Sort By :</label>
      <select
        className="outline-none px-1 shadow-sm dark:bg-neutral-700"
        onChange={getDropDownValue}
      >
        <option value="" disabled selected>
          Select Value
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default SortBy;
