import { useEffect, useState } from "react";
import { productType } from "../../shared/productType";
import ProductImage from "./ProductImage/ProductImage";
import ProductInformation from "./productInformation/ProductInformation";
import ShareModal from "./ShareModal/ShareModal";
import AboutProduct from "./AboutProduct/AboutProduct";
import ProductReviews from "./ProductReviews/ProductReviews";
import products from "../../assets/data/products";
import SimilarProducts from "./SimilarProduct/SimilarProducts";

type Props = {
  product: productType;
};

const ProductDetail = ({ product }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState<string>("description");
  const [similarProduct, setSimilarProduct] = useState<productType[]>();

  const showModalHandlar = (state: boolean) => {
    setShowModal(state);
  };

  useEffect(() => {
    const sameCategory = products.filter(
      (item) => item.category == product.category
    );
    setSimilarProduct(sameCategory);
  }, [product]);
  return (
    <div className=" space-y-5 py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-10 ">
        <ProductImage
          imgUrl={product.imgUrl}
          productName={product.productName}
        />
        <ProductInformation
          productName={product.productName}
          category={product.category!}
          avgRating={product.avgRating!}
          price={product.price}
          shortDesc={product.shortDesc!}
          showModal={showModalHandlar}
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <h2
          className={`${
            tab == "description"
              ? "dark:text-zinc-100 font-semibold p-2 cursor-pointer focus:border-b-2"
              : "dark:text-zinc-100 font-light p-2 cursor-pointer focus:border-b-2"
          }`}
          onClick={() => setTab("description")}
        >
          Discription
        </h2>
        <h2
          className={`${
            tab == "reviews"
              ? "dark:text-zinc-100 font-semibold p-2 cursor-pointer focus:border-b-2"
              : "dark:text-zinc-100 font-light p-2 cursor-pointer focus:border-b-2"
          }`}
          onClick={() => setTab("reviews")}
        >
          Reviews
        </h2>
      </div>
      {tab == "description" && (
        <AboutProduct description={product.description!} />
      )}
      {tab == "reviews" && <ProductReviews reviews={product.reviews!} />}
      {similarProduct && <SimilarProducts products={similarProduct} />}
      {showModal && <ShareModal showModal={showModalHandlar} />}
    </div>
  );
};

export default ProductDetail;
