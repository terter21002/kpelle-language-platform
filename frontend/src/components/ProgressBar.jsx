import CustomProgressBar from "./CustomProgressBar"; // Assuming you have this component imported
import PropTypes from "prop-types";

const ProgressBar = ({
  percentage,
  endColor,
  startColor,
  gradientId,
  children,
}) => {
  const gradientTransform = "rotate(1)";

  return (
    <div
      className="progress-bar"
      style={{
        width: "200px",
        height: "200px",
      }}
    >
      <svg style={{ height: 0, width: 0 }}>
        <defs>
          <linearGradient id={gradientId} gradientTransform={gradientTransform}>
            <stop offset="0%" stopColor={startColor} />
            <stop offset="50%" stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>
      <CustomProgressBar
        percentage={percentage}
        strokeWidth="15"
        styles={{ path: { stroke: `url(#${gradientId})`, height: "100%" } }}
      >
        {children}
      </CustomProgressBar>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.string.isRequired,
  endColor: PropTypes.string.isRequired,
  startColor: PropTypes.string.isRequired,
  gradientId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ProgressBar;
