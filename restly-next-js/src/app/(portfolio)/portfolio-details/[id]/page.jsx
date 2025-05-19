import Wrapper from "@/layout/wrapper";
import { galleryData } from "@/data";
import PortfolioDetailsMain from "@/components/portfolio-details";

export const metadata = {
  title: "Portfolio Details Page - Restly",
};

const PortfolioDetailsPage = async ({ params }) => {
  const { id } = await params;
  const item = galleryData.find((p) => Number(p.id) === Number(id));
  return (
    <Wrapper>
      {item ? (
        <PortfolioDetailsMain portfolioItem={item} />
      ) : (
        <h3 className="text-center mt-100">Gallery Not Found with id {id}</h3>
      )}
    </Wrapper>
  );
};

export default PortfolioDetailsPage;
