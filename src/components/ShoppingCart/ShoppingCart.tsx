import CartItems from "./CartItems/CartItems";
import CartDetails from "./CartDetails/CartDetails";
import { cartInitialState } from "../../shared/productType";
import CommonSection from "../CommonSection/CommonSection";

type Props = {
  cartData: cartInitialState;
};

const ShoppingCart = ({ cartData }: Props) => {
  const { items, totalQuantity, totalAmount } = cartData;
  return (
    <div className="relative min-h-screen">
      <CommonSection innerText="Minimal Cart" />
      <div className="grid grid-cols-1 md:grid-cols-3 px-8 pb-24 w-full">
        <CartItems items={items} />
        <CartDetails totalQuantity={totalQuantity} totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default ShoppingCart;
