const Navbar = () => {
  return (
    <div className="  w-full rounded-2xl bg-black text-white">
      <div className=" flex max-w-[1440px] mx-auto justify-between py-5 px-10">
        <div className=" ">
          <p>Logo</p>
        </div>
        <div>
          <ul className=" flex gap-10">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              {" "}
              <li>About</li>
            </a>
            <a href="">
              {" "}
              <li>Services</li>
            </a>
            <a href="">
              {" "}
              <li>Portfolio</li>
            </a>
            <a href="">
              {" "}
              <li>Team</li>
            </a>
            <a href="">
              {" "}
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
