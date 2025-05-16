import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: [
      'Listening',
      'Speaking',
      'Pronunciation',
      'Drag and Drop Games',
      'Quiz',
    ],
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'locked', 'continue'],
    default: 'locked',
  },
  unitProgress: { type: Number, default: 0, min: 0, max: 100 },
});

const lessonSchema = new mongoose.Schema({
  languageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language',
    required: true,
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true,
  },
  lessonNumber: { type: Number, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  imageUrl: { type: String, required: true },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  activities: [activitySchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Lesson', lessonSchema);
