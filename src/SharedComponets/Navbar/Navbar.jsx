import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-20 top-0 w-full ${
          scrollY > 1
            ? "bg-white text-black shadow-lg"
            : "bg-transparent text-white "
        }  dark:bg-black duration-500 dark:text-white`}
      >
        <div className="  rounded-b-2xl  flex max-w-[1440px] mx-auto justify-between py-3 md:py-5   px-10">
          <div className=" ">
            <p>Logo</p>
          </div>
          <div>
            <div className=" block md:hidden lg:hidden">
              <IoMdMenu onClick={handleOpenMenu} className=" text-4xl" />
            </div>
            <div className=" hidden md:block lg:block">
              <ul className=" font-semibold flex gap-10">
                <a href="" className="duration-150 hover:text-[#D01D3F]  ">
                  <li>Home</li>
                </a>
                <a href="" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>About</li>
                </a>
                <a href="" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>Services</li>
                </a>
                <a href="" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>Portfolio</li>
                </a>
                <a href="" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>Team</li>
                </a>
                <a href="" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMenu ? "w-1/2 md:w-1/4" : "w-0"
        } fixed duration-200  h-full  top-0 z-20 left-0 bg-[#DBDADA]`}
      >
        <div className=" w-full flex justify-end ">
          <RxCross1
            onClick={handleCloseMenu}
            className=" text-right text-2xl mr-5 mt-5 text-black"
          />
        </div>
        <div
          className={`${!openMenu ? "hidden" : "block"} flex justify-center`}
        >
          {" "}
          <ul className=" flex flex-col text-center gap-5 text-black">
            <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
              Home
            </li>
            <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
              About
            </li>
            <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
              Services
            </li>
            <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
              Portfolio
            </li>
            <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
              Team
            </li>
            <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
