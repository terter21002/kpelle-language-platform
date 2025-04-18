import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";

const CustomProgressBar = ({ children, ...otherProps }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <CircularProgressbar {...otherProps} />
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
CustomProgressBar.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CustomProgressBar;
