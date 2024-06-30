import SectionTitle from "../../CustomComponent/SectionTitle";
import PortfolioCards from "./PortfolioCards";

const Portfolio = () => {
  const title = "Portfolio";
  const subtilte = "Project Showcase";
  const description =
    "Step into our project gallery where each piece of work reflects our dedication and skill in coding.  From sleek websites to complex applications, CodingLab’s projects demonstrate our ability to tackle challenges and deliver exceptional results.";
  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div className="mb-4">
        <SectionTitle
          title={title}
          subtitle={subtilte}
          description={description}
          designAmount={1}
        ></SectionTitle>
      </div>

      <div>
        <PortfolioCards></PortfolioCards>
      </div>
    </div>
  );
};

export default Portfolio;
