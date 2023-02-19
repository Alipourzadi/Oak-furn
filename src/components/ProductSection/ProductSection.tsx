import { productType } from "../../shared/productType";
import ProductItem from "../ProductItem/ProductItem";

type Props = {
  title?: string;
  products: productType[];
};

const ProductSection = (props: Props) => {
  const products = props.products;
  return (
    <div className="space-y-16 my-8 text-center">
      {props.title && (
        <h2 className="border-b-2 border-black dark:border-zinc-100 w-fit mx-auto pb-2 text-2xl font-extralight dark:text-zinc-100">
          {props.title}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 px-10 md:px-20">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              id: product.id,
              productName: product.productName,
              imgUrl: product.imgUrl,
              category: product.category,
              price: product.price,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
