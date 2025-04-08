import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MaskCard = ({ title, description, imageUrl }) => {
  return (
    <Paper
      elevation={3}
      className="h-full transition-transform duration-300 hover:scale-105"
    >
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-32 h-32 object-cover rounded-t-lg"
        />
      </div>
      <div className="px-6 py-6 flex-grow bg-[#5D2E1A] text-white rounded-sm">
        <Typography variant="h6" className="text-center pb-2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          className="text-xs text-gray-200 text-center"
        >
          {description}
        </Typography>
      </div>
    </Paper>
  );
};

MaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default MaskCard;
