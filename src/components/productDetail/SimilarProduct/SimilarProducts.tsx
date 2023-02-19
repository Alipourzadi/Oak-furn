import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactNode, useRef } from "react";
import { productType } from "../../../shared/productType";
import ProductItem from "../../ProductItem/ProductItem";

type Props = {
  products: productType[];
};

const SimilarProducts = ({ products }: Props) => {
  const slidTrackRef = useRef<HTMLDivElement>(null);

  const scrollRightHandler = () => {
    slidTrackRef.current!.scrollLeft += 250;
  };

  const scrollLeftHandler = () => {
    slidTrackRef.current!.scrollLeft -= 250;
  };

  return (
    <div className="relative space-y-5">
      <div
        className="absolute z-10 top-1/2 right-4 bg-zinc-100 shadow-lg p-3 rounded-full cursor-pointer"
        onClick={scrollRightHandler}
      >
        <ChevronRightIcon className="w-5" />
      </div>
      <div
        className="absolute z-10 top-44 left-4 bg-zinc-100 shadow-lg p-3 rounded-full cursor-pointer"
        onClick={scrollLeftHandler}
      >
        <ChevronLeftIcon className="w-5" />
      </div>
      <h2 className="text-xl px-10 dark:text-zinc-100">You might Also liked</h2>
      <div
        ref={slidTrackRef}
        className="mx-auto px-5 mt-10 scroll-smooth overflow-x-auto overflow-y-hidden scrollbar-none"
      >
        <div className="flex gap-5 w-[2800px] whitespace-nowrap peer-first:ml-0">
          {products.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
