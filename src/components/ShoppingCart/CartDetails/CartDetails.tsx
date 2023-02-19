import { Link } from "react-router-dom";

type Props = {
  totalQuantity: number;
  totalAmount: number;
};

const CartDetails = ({ totalQuantity, totalAmount }: Props) => {
  const redirectToCheckoutHandler = () => {};
  return (
    <div className="py-10 rounded-b-sm md:rounded-r-sm flex flex-col items-center justify-center gap-5 bg-zinc-300 dark:bg-neutral-500 dark:text-zinc-100">
      <h2 className="text-lg">Total Quantity: {`${totalQuantity}$`}</h2>
      <h2 className="text-lg">Total Price: {`${totalAmount}$`}</h2>
      <div className="flex flex-col items-center justify-center gap-5 p-2">
        <Link
          className="bg-zinc-400 text-sm p-2 rounded-sm hover:text-white hover:bg-zinc-600"
          to="/shop"
        >
          Continue Shopping
        </Link>
        <Link
          className="bg-zinc-400 p-2 rounded-sm hover:text-white hover:bg-zinc-600"
          to="/checkout"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
