import { motion } from "framer-motion";
import { cartSliceProductType, productType } from "../../../shared/productType";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/cartSlice";
import { toast } from "react-toastify";

type Props = {
  item: cartSliceProductType;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item: cartSliceProductType) => {
    const { id, productName, price, image } = item;
    dispatch(
      cartActions.addToCart({
        id,
        productName,
        price,
        imgUrl: image,
      })
    );
    toast.success(`${productName} added to cart!`);
  };

  const removeFromCartHandler = (item: cartSliceProductType) => {
    const { id, productName } = item;
    dispatch(cartActions.removeFromCart(id));
    toast.error(`${productName} remove from cart!`);
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full p-2 bg-zinc-300/50 dark:bg-neutral-800 text-neutral-700 dark:text-zinc-100">
      <div className="flex items-center justify-center gap-3 w-full">
        <div className="w-1/2 md:w-fit">
          <img src={item.image} alt={item.productName} className="w-20" />
        </div>
        <div className="flex flex-col items-start gap-2 w-full ">
          <h2 className="font-semibold text-sm md:text-base">
            {item.productName}
          </h2>
          <div className="flex gap-4 bg-zinc-300 dark:bg-neutral-500 p-1 rounded-sm">
            <p>{`x${item.quantity}`}</p>
            <p>{`$${item.price}`}</p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-col-reverse items-center justify-center gap-4 w-full md:w-fit">
        <p className="text-sm md:text-base w-1/2 md:w-fit">
          totalPrice : {`$${item.totalPrice}`}
        </p>
        <div className="flex items-center justify-end md:justify-center gap-4 w-1/2 md:w-fit">
          <motion.button
            whileTap={{ scale: 1.3 }}
            className="bg-zinc-300 dark:bg-neutral-500 rounded-sm w-8 md:w-12"
            onClick={addToCartHandler.bind(null, item)}
          >
            +
          </motion.button>
          <motion.button
            whileTap={{ scale: 1.3 }}
            className="bg-zinc-300 dark:bg-neutral-500 rounded-sm w-8 md:w-12"
            onClick={removeFromCartHandler.bind(null, item)}
          >
            -
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
