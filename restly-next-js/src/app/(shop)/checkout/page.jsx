import CheckoutMain from "@/components/checkout";
import Wrapper from "@/layout/wrapper";

export const metadata = {
  title: "Checkout Page - Restly",
};

const CheckoutPage = () => {
  return (
    <Wrapper>
      <CheckoutMain />
    </Wrapper>
  );
};

export default CheckoutPage;
