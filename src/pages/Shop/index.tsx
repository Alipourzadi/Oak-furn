import React, { useEffect, useState } from "react";
import CommonSection from "../../components/CommonSection/CommonSection";
import ShopFilter from "../../components/ShopFilter/ShopFilter";
import getFiltereData from "../../shared/getFilteredData";
import products from "../../assets/data/products";
import { productType } from "../../shared/productType";
import ProductSection from "../../components/ProductSection/ProductSection";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Sponsers from "../../components/Sponsers/Sponsers";
import ScrollToTop from "../../hooks/scrollToTop";

type Props = {};
type filtereQueries = {
  searchQuery: string;
  categoryQuery: string;
  sortByQuery: string;
};

const Shop = (props: Props) => {
  const [filtereQueries, setFilterQueries] = useState<filtereQueries>();
  const [filtredProducts, setFilteredProducts] = useState<productType[]>();
  const [showFilter, setShowFilter] = useState(false);

  const getFilterQueries = (value: filtereQueries) => {
    setFilterQueries(value);
  };

  useEffect(() => {
    const filteredData = getFiltereData(products, {
      ...filtereQueries!,
      type: null,
    });
    console.log(products, filteredData);
    setFilteredProducts(filteredData);
  }, [filtereQueries]);

  const toggleFilterHandlers = () => {
    setShowFilter((pervState) => !pervState);
  };

  return (
    <ScrollToTop>
      <div>
        <CommonSection innerText="Minimal Shop" />
        <div className="flex items-center justify-start mx-10 my-8 md:mx-20 border-b-2 gap-2 border-black dark:border-zinc-200 max-w-max dark:text-zinc-100">
          <h1 className="text-xl">Filter Data:</h1>
          <AdjustmentsHorizontalIcon
            className="w-6 flex items-center justify-center cursor-pointer"
            onClick={toggleFilterHandlers}
          />
        </div>
        {showFilter && <ShopFilter getFilterQueries={getFilterQueries} />}
        {filtredProducts && <ProductSection products={filtredProducts!} />}
        {filtredProducts?.length == 0 && (
          <h2 className="text-3xl my-20 text-center dark:text-zinc-100">
            No product found!!
          </h2>
        )}
        <Sponsers />
      </div>
    </ScrollToTop>
  );
};

export default Shop;
