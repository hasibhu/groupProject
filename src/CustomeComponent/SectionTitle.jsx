import PropTypes from "prop-types";
export default function SectionTitle({ title, subtitle, description }) {
  const subTitleArray = subtitle.split(" ");
  return (
    <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center">
      <h1 className="bg-[#FDEFF2] inline-block uppercase text-[#E43C5C] text-[16px] font-semibold py-1 px-5 rounded-full">
        {title}
      </h1>
      <h2 className="text-[#444444] text-[40px] font-semibold">
        {subTitleArray[0]}{" "}
        <span className="text-[#E43C5C]">{subTitleArray[1]}</span>
      </h2>
      <p className=" text-lg text-black/70 text-center">{description}</p>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};