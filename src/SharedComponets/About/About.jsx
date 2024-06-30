import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../../CustomComponent/SectionTitle";

import about from "../../assets/about.jpg";
import Button from "./../../CustomComponent/Button";

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-10 lg:my-24 ">
      {/* Section Title  */}

      <SectionTitle
        title="About"
        subtitle="Empowering Developers"
        description="Transforming ideas into code through hands-on labs, expert guidance, and community support."
      />

      {/* About Section */}
      <div className="mt-5 lg:mt-10">
        <div className="lg:w-[90%] mx-auto px-3 flex gap-16 flex-col lg:flex-row ">
          {/* 1st part */}
          <div className="flex-1">
            <img src={about} alt="" className="rounded-lg" />
          </div>

          {/* 2nd Part */}
          <div className="flex-1 space-y-3">
            <p className="text-[#444444]  lg:text-lg">
              Unlock your coding potential with hands-on labs, expert guidance, and a supportive developer community. Transform your ideas
              into reality and grow your skills.
            </p>

            <ul className="pl-3 space-y-2 text-[#444444]">
              <li>
                <FaCheckCircle className="inline-block mr-1 text-[#E43C5C] pb-[2px] text-lg" />
                Receive advice and mentorship from industry professionals to navigate complex coding problems.
              </li>
              <li>
                <FaCheckCircle className="inline-block mr-1 text-[#E43C5C] pb-[2px] text-lg" />
                Join a vibrant network of developers to share knowledge, collaborate on projects, and grow together.
              </li>
            </ul>

            <p className="text-[#444444] lg:text-lg">
              Empower your coding journey with our dynamic code labs. Through interactive projects, expert insights, and a thriving
              developer community. Elevate your skills, turn ideas into reality, and collaborate with peers in an engaging and innovative
              learning environment.
            </p>

            <div>
              <Button>View Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
