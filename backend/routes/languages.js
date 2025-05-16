import express from 'express';
import {
  getAllLanguages,
  getLanguageById,
  createLanguage,
} from '../controllers/languageController.js';

const router = express.Router();

router.get('/', getAllLanguages);
router.get('/:id', getLanguageById);
router.post('/', createLanguage);

export default router;
