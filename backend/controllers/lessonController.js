import Lesson from '../models/Lesson.js';
import Language from '../models/Language.js';

export const getLessonsByLanguageAndLevel = async (req, res) => {
  try {
    const language = await Language.findById(req.params.languageId);
    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }

    const lessons = await Lesson.find({
      languageId: req.params.languageId,
      level: req.params.level,
    }).sort('lessonNumber');

    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate('languageId');
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createLesson = async (req, res) => {
  const lesson = new Lesson({
    languageId: req.body.languageId,
    level: req.body.level,
    lessonNumber: req.body.lessonNumber,
    title: req.body.title,
    subtitle: req.body.subtitle,
    imageUrl: req.body.imageUrl,
    activities: req.body.activities,
  });

  try {
    const newLesson = await lesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
