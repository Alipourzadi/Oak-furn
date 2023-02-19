import { useState } from "react";
import { productType } from "../../shared/productType";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeatIconSolid } from "@heroicons/react/24/solid";
import { cartActions } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

type Props = {
  product: productType;
};

const ProductItem = (props: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { id, productName, price, imgUrl, category } = props.product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({ id, productName, price, imgUrl, category })
    );
    toast.success(`${productName} added to cart!`);
  };
  return (
    <div className="flex flex-col justify-between gap-4 bg-zinc-50 dark:bg-neutral-700 dark:text-zinc-100 shadow-sm rounded-sm p-3 w-full">
      <motion.div whileHover={{ scale: 1.05 }} className="mx-auto h-full">
        <img
          src={imgUrl}
          alt={productName}
          className="rounded-sm object-cover h-full bg-center"
        />
      </motion.div>
      <div className="space-y-2 basis-1/3 flex flex-col justify-end">
        <Link to={`/shop/${id}`} className="text-left">
          <p>{productName}</p>
          <p className="text-sm font-light">{category}</p>
        </Link>
        <div className="flex items-center justify-between wfull">
          <p className="font-light text-zinc-700 dark:text-zinc-100">{`${price} $`}</p>
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 1.5 }}
              onClick={() => setIsLiked((pervState) => !pervState)}
            >
              {!isLiked && <HeartIcon className="w-5 hover:text-[#bf6d78]" />}
              {isLiked && <HeatIconSolid className="w-5 text-[#ae5863]" />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 1.3 }}
              className="bg-zinc-300 dark:bg-neutral-500 rounded-sm w-12"
              onClick={addToCartHandler}
            >
              +
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
