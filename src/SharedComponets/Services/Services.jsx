import { BsServer } from "react-icons/bs";
import { FaServer, FaUserLock } from "react-icons/fa";
import { MdAdminPanelSettings, MdDashboard, MdDevices } from "react-icons/md";
import "./services.css";
import { IoIosSettings, IoLogoUsd } from "react-icons/io";
import SectionTitle from "../../CustomComponent/SectionTitle";

const Services = () => {
  const title = `Services`;
  const subtitle = `Our Services`;
  const description = ` If you buy any services from us we commited to support you 24/7. So
          Harry Up .....`;
  return (
    <div>
      <div>
        <SectionTitle
          title={title}
          subtitle={subtitle}
          description={description}
          designAmount={1}
        ></SectionTitle>
      </div>
      <div className=" p-3 lg:p-0 my-7 max-w-[1440px] mx-auto grid grid-cols-12 gap-5">
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <MdDevices className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">
              Frontend Development
            </h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <FaServer className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">
              Backend Development
            </h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <BsServer className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">
              Database Development
            </h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <FaUserLock className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">Authentication</h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <IoLogoUsd className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">Payment System</h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <MdDashboard className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">
              Dashboard Development
            </h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <MdAdminPanelSettings className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">
              {" "}
              Admin Panel Development
            </h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
        <div className=" p-3  border-2 rounded-xl md:col-span-4 col-span-12  lg:col-span-3 hover_root cursor-pointer ">
          <div className=" py-3 flex flex-col items-center gap-2 text-center">
            <div>
              <IoIosSettings className=" hover_child duration-300  text-4xl text-[#e43c5c]" />
            </div>
            <h1 className=" tracking-widest font-medium">Others Development</h1>
            <p className=" text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              distinctio?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
