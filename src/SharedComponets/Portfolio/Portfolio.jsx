import PortfolioCard from "./PortfolioCard";


const Portfolio = () => {
    return (
        <div className="max-w-[1440px] lg:mx-20 mx-10">
            <div className="flex justify-center mb-7">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="bg-[#FDEFF2] text-[#E43C5C] text-[16px] font-semibold py-1 px-5 rounded-full">
              Portfolio
            </h1>
            <h2 className="text-[#444444] text-[40px] font-semibold">
            Project  <span className="text-[#E43C5C]">Showcase</span>
            </h2>
            <p className="max-w-[600px] text-center">
            Step into our project gallery where each piece of work reflects our dedication and skill in coding.  From sleek websites to complex applications, CodingLab’s projects demonstrate our ability to tackle challenges and deliver exceptional results.
            </p>
          </div>
        </div>
            {/*  */}
           
            <div>
                    <PortfolioCard></PortfolioCard>
                </div>
        </div>
    );
};

export default Portfolio;