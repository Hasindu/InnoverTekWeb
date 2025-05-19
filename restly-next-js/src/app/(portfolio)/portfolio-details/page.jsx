import Wrapper from "@/layout/wrapper";
import { galleryData } from "@/data";
import PortfolioDetailsMain from "@/components/portfolio-details";

export const metadata = {
  title: "Portfolio Details Page - Restly",
};

const PortfolioDetailsPage = async () => {
  const galleryItem = galleryData[0];
  return (
    <Wrapper>
      <PortfolioDetailsMain portfolioItem={galleryItem} />
    </Wrapper>
  );
};

export default PortfolioDetailsPage;
