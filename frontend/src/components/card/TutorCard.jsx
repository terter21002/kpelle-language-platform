import { Badge } from "@mui/material";
import PropTypes from "prop-types";

const TutorCard = (props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative lg:h-72 md:h-56 h-48">
        <img
          src={props.imageSrc}
          alt={`Tutor ${props.name}`}
          className="object-cover w-full h-full"
        />
        <Badge
          badgeContent="Professional"
          color="warning"
          sx={{
            position: "absolute",
            right: 40,
            bottom: 10,
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">{props.name}</h3>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 18l-6 4 2-7-6-5h7l2-6 2 6h7l-6 5 2 7z"></path>
              </svg>
              <span className="text-sm">{props.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold">${props.price}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-gray-200 rounded-full" />
            <span className="text-sm">{props.language}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-gray-200 rounded-full" />
            <span className="text-sm">{props.lessons} Lessons</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm">{props.country}</span>
        </div>

        <p className="text-gray-600">{props.description}</p>
      </div>
    </div>
  );
};

TutorCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  lessons: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default TutorCard;
