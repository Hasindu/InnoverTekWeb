import Wrapper from "@/layout/wrapper";
import { products } from "@/data";
import ShopDetailsMain from "@/components/shop-details";

export const metadata = {
  title: "Shop Details Page - Restly",
};

const ShopDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = products.find((p) => Number(p.id) === Number(id));
  return (
    <Wrapper>
      {service ? (
        <ShopDetailsMain product={product} />
      ) : (
        <h3 className="text-center mt-100">Product Not Found with id {id}</h3>
      )}
    </Wrapper>
  );
};

export default ShopDetailsPage;
