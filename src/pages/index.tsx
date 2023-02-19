import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Services from "../components/Services/Services";
import ProductSection from "../components/ProductSection/ProductSection";
import Clock from "../components/Timer/Clock";
import Sponsers from "../components/Sponsers/Sponsers";

import products from "../assets/data/products";
import { productType } from "../shared/productType";
import getFiltereData from "../shared/getFilteredData";
import ScrollToTop from "../hooks/scrollToTop";

// type Props = {};

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState<productType[]>();
  const [bestSalesProduct, setBestSalesProduct] = useState<productType[]>();
  const [newArrival, setNewArrival] = useState<productType[]>();

  useEffect(() => {
    const filterdTrendProducts = getFiltereData(products, {
      type: "trending",
      categoryQuery: null,
      searchQuery: null,
      sortByQuery: null,
    });
    const filterdBestSalesProducts = getFiltereData(products, {
      type: "best-sales",
      categoryQuery: null,
      searchQuery: null,
      sortByQuery: null,
    });
    const filterdNewArrivalProducts = getFiltereData(products, {
      type: "new-arrival",
      categoryQuery: null,
      searchQuery: null,
      sortByQuery: null,
    });

    setTrendingProducts(filterdTrendProducts);
    setBestSalesProduct(filterdBestSalesProducts);
    setNewArrival(filterdNewArrivalProducts);
  }, []);
  return (
    <ScrollToTop>
      <div>
        <HeroSection />
        <Services />
        {trendingProducts && (
          <ProductSection
            products={trendingProducts!}
            title="Trending Product"
          />
        )}
        {bestSalesProduct && (
          <ProductSection products={bestSalesProduct!} title="Best Sales" />
        )}
        <Clock />
        {bestSalesProduct && (
          <ProductSection products={newArrival!} title="New Arrival" />
        )}
        <Sponsers />
      </div>
    </ScrollToTop>
  );
};

export default Home;
