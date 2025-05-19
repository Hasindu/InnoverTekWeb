import Wrapper from "@/layout/wrapper";
import { products } from "@/data";
import ShopDetailsMain from "@/components/shop-details";

export const metadata = {
  title: "Shop Details Page - Restly",
};

const ShopDetailsPage = async () => {
  const product = products[0];
  return (
    <Wrapper>
      <ShopDetailsMain product={product} />
    </Wrapper>
  );
};

export default ShopDetailsPage;
