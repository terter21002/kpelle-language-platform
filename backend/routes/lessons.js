import express from 'express';
import {
  getLessonsByLanguageAndLevel,
  getLessonById,
  createLesson,
} from '../controllers/lessonController.js';

const router = express.Router();

router.get('/:languageId/:level', getLessonsByLanguageAndLevel);
router.get('/:id', getLessonById);
router.post('/', createLesson);

export default router;
