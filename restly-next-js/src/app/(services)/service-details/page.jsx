import Wrapper from "@/layout/wrapper";
import { services } from "@/data";
import ServiceDetailsMain from "@/components/service-details";

export const metadata = {
  title: "Service Details Page - Restly",
};

const ServicesDetailsPage = () => {
  const service = services[0];
  return (
    <Wrapper>
      <ServiceDetailsMain serviceItem={service} />
    </Wrapper>
  );
};

export default ServicesDetailsPage;
