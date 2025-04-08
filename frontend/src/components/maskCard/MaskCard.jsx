import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MaskCard = ({ title, description, imageUrl }) => {
  return (
    <Paper
      elevation={3}
      className="h-full transition-transform duration-300 hover:scale-105"
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <Typography variant="h6" className="mb-2 line-clamp-1">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="line-clamp-2"
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
