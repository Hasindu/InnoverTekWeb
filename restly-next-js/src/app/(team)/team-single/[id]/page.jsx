import Wrapper from "@/layout/wrapper";
import { teamData } from "@/data";
import TeamDetailsMain from "@/components/team-details";

export const metadata = {
  title: "Team Details Page - Restly",
};

const TeamDetailsPage = async ({ params }) => {
  const { id } = await params;
  const item = teamData.find((p) => Number(p.id) === Number(id));
  return (
    <Wrapper>
      {item ? (
        <TeamDetailsMain team={item} />
      ) : (
        <h3 className="text-center mt-100">Team Not Found with id {id}</h3>
      )}
    </Wrapper>
  );
};

export default TeamDetailsPage;
