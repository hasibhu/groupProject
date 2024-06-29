import PropTypes from "prop-types";
export default function Button({ children }) {
  return (
    <button className="btn rounded-full hover:bg-[#E9607A] text-[#FFFFFF] bg-[#E43C5C] px-6 py-2">
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.string.isRequired,
};
