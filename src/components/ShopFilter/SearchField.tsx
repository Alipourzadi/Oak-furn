import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

type filterType = "category" | "sort" | "searchvalue";

type Props = {
  getFilterQuery: (data: { value: string; type: filterType }) => void;
};

const SearchField = ({ getFilterQuery }: Props) => {
  const inputRef = useRef<any>();
  const getInputValue = () => {
    if (!inputRef.current) return;
    const inputValue = inputRef.current.value;
    getFilterQuery({ value: inputValue.toLowerCase(), type: "searchvalue" });
  };
  return (
    <div className="border-[1px] border-black dark:border-zinc-100 rounded-sm p-1 flex items-center justify-center gap-2 w-full md:w-1/3">
      <input
        type="search"
        name="search"
        className="border-none outline-none first-letter:capitalize bg-transparent w-full"
        placeholder="Search..."
        ref={inputRef}
      />
      <MagnifyingGlassIcon className="w-6" onClick={getInputValue} />
    </div>
  );
};

export default SearchField;
