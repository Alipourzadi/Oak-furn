type filterType = "category" | "sort" | "searchvalue";

type Props = {
  getFilterQuery: (data: { value: string; type: filterType }) => void;
};

const CategoryFilter = ({ getFilterQuery }: Props) => {
  const getDropDownValue = (e: any) => {
    const value = e.target.value;
    getFilterQuery({ value, type: "category" });
  };
  return (
    <div className="flex items-start justify-start space-x-3 text-sm md:text-base">
      <label>Category :</label>
      <select
        className="outline-none px-1 shadow-sm dark:bg-neutral-700"
        onChange={getDropDownValue}
      >
        <option>Select Value</option>
        <option value="sofa">Sofa</option>
        <option value="chair">Chair</option>
        <option value="table">Table</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
