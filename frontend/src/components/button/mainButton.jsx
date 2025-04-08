import PropTypes from "prop-types";

const MainButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="cursor-pointer relative px-6 py-2 text-white text-lg rounded-[2rem] shadow-sm bg-gradient-to-b from-[#E74C3C] to-[#962d21] hover:from-[#962d21] hover:to-[#E74C3C] active:translate-y-0.5 transition-transform duration-300"
    >
      {props.title}
    </button>
  );
};

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MainButton;
