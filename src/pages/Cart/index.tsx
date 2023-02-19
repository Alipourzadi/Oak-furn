import ScrollToTop from "../../hooks/scrollToTop";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";

type Props = {};

const Cart = (props: Props) => {
  const cartData = useSelector((state: any) => state.cart);
  console.log(cartData);
  return (
    <ScrollToTop>
      <ShoppingCart cartData={cartData} />
    </ScrollToTop>
  );
};

export default Cart;
