import PropTypes from "prop-types";

const FeatureCard = (props) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 relative w-24 h-24">
        <img
          src={props.imageSrc}
          alt={props.title}
          className="object-contain w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
