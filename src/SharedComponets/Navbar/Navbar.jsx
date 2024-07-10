import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import LightModeLogo from "../../assets/logoW.png";
import DarkModeLogo from "../../assets/logoB.png";

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
        }  dark:bg-black duration-500 `}
      >
        <div className="  rounded-b-2xl  flex max-w-[1440px] mx-auto justify-between items-center py-3 md:py-5   px-10">
          <div className=" h-12 ">
            <img
              className=" w-full h-full"
              src={scrollY > 1 ? DarkModeLogo : LightModeLogo}
              alt=""
            />
          </div>
          <div>
            <div className=" block md:hidden lg:hidden">
              <IoMdMenu onClick={handleOpenMenu} className=" text-4xl" />
            </div>
            <div className=" hidden md:block lg:block">
              <ul className=" font-semibold flex gap-10">
                <a
                  href="#slider"
                  className="duration-150 hover:text-[#D01D3F]  "
                >
                  <li>Home</li>
                </a>
                <a href="#about" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>About</li>
                </a>
                <a
                  href="#services"
                  className="duration-150 hover:text-[#D01D3F]"
                >
                  {" "}
                  <li>Services</li>
                </a>
                <a
                  href="#portfolio"
                  className="duration-150 hover:text-[#D01D3F]"
                >
                  {" "}
                  <li>Portfolio</li>
                </a>
                <a href="#price" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>Pricing</li>
                </a>
                <a href="#team" className="duration-150 hover:text-[#D01D3F]">
                  {" "}
                  <li>Team</li>
                </a>
                <a
                  href="#contact"
                  className="duration-150 hover:text-[#D01D3F]"
                >
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
            <a href="#slider">
              {" "}
              <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
                Home
              </li>
            </a>
            <a href="#about">
              <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
                About
              </li>
            </a>
            <a href="#services">
              <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
                Services
              </li>
            </a>
            <a href="#portfolio">
              <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
                Portfolio
              </li>
            </a>
            <a href="#price">
              <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
                Pricing
              </li>
            </a>
            <a href="#team">
              <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
                Team
              </li>
            </a>
            <a href="#contact">
              <li className=" cursor-pointer hover:text-[#D01D3F] duration-300">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
