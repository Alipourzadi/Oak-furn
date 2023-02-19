import { cartSliceProductType } from "../../../shared/productType";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

type Props = {
  items: cartSliceProductType[];
};

const CartItems = ({ items }: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center w-full p-4 col-span-2 rounded-sm bg-zinc-400 dark:bg-neutral-700">
      {items &&
        items.map((item) => {
          return <CartItem item={item} />;
        })}

      {items.length == 0 && (
        <div className="text-center dark:text-zinc-100">
          <p className="text-xl my-2">No Item Found!!</p>
          <Link
            to="/ shop"
            className="bg-zinc-500 text-xl p-1 rounded-sm hover:text-white hover:bg-zinc-600"
          >
            Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItems;
