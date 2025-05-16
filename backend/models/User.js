import mongoose from 'mongoose';

const userProgressSchema = new mongoose.Schema({
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
  completedLessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  currentLesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
  },
  progress: { type: Number, default: 0, min: 0, max: 100 },
});

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  language: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  profile: {
    name: String,
    avatar: String,
    bio: String,
  },
  languageProgress: [userProgressSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);
