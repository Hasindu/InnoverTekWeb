import Wrapper from "@/layout/wrapper";
import { teamData } from "@/data";
import TeamDetailsMain from "@/components/team-details";

export const metadata = {
  title: "Team Details Page - Restly",
};

const TeamDetailsPage = () => {
  const item = teamData[1];
  return (
    <Wrapper>
      <TeamDetailsMain team={item} />
    </Wrapper>
  );
};

export default TeamDetailsPage;
