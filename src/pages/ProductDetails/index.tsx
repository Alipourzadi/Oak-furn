import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import { productType } from "../../shared/productType";
import ProductDetail from "../../components/productDetail/ProductDetail";
import ScrollToTop from "../../hooks/scrollToTop";

type Props = {};

const ProductDetails = (props: Props) => {
  const { id } = useParams();
  const product: productType = products.find((item) => item.id == id)!;
  return (
    <ScrollToTop>
      <ProductDetail product={product} />
    </ScrollToTop>
  );
};

export default ProductDetails;
