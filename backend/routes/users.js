import express from 'express';
import {
  getUserProgress,
  updateUserProgress,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/:userId/progress', getUserProgress);
router.put('/:userId/progress', updateUserProgress);

export default router;
