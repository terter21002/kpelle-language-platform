import User from '../models/User.js';

export const getUserProgress = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('languageProgress.languageId')
      .populate('languageProgress.completedLessons')
      .populate('languageProgress.currentLesson');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.languageProgress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUserProgress = async (req, res) => {
  try {
    const { languageId, level, lessonId, progress } = req.body;

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let languageProgress = user.languageProgress.find(
      (lp) => lp.languageId.toString() === languageId && lp.level === level,
    );

    if (!languageProgress) {
      languageProgress = {
        languageId,
        level,
        completedLessons: [],
        currentLesson: lessonId,
        progress,
      };
      user.languageProgress.push(languageProgress);
    } else {
      if (!languageProgress.completedLessons.includes(lessonId)) {
        languageProgress.completedLessons.push(lessonId);
      }
      languageProgress.currentLesson = lessonId;
      languageProgress.progress = progress;
    }

    await user.save();
    res.json(user.languageProgress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
