import CartMain from "@/components/cart";
import Wrapper from "@/layout/wrapper";

export const metadata = {
  title: "Cart Page - Restly",
};

const CartPage = () => {
  return (
    <Wrapper>
      <CartMain />
    </Wrapper>
  );
};

export default CartPage;
