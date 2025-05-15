import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  imageUrl: String,
  levels: [
    {
      name: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true,
      },
      description: String,
      lessonRange: {
        start: { type: Number, required: true },
        end: { type: Number, required: true },
      },
      topics: [String],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Language', languageSchema);
