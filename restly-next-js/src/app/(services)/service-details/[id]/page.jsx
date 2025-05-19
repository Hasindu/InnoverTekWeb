import Wrapper from "@/layout/wrapper";
import { services } from "@/data";
import ServiceDetailsMain from "@/components/service-details";

export const metadata = {
  title: "Service Details Page - Restly",
};

const ServicesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const service = services.find((ser) => Number(ser.id) === Number(id));
  return (
    <Wrapper>
      {service ? (
        <ServiceDetailsMain serviceItem={service} />
      ) : (
        <h3 className="text-center mt-100">Service Not Found</h3>
      )}
    </Wrapper>
  );
};

export default ServicesDetailsPage;
