import express from 'express';
import {
  login,
  register,
  requestPasswordReset,
  resetPassword,
} from '../controllers/authController.js';
import passport from 'passport';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', requestPasswordReset);
router.post('/reset-password', resetPassword);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    try {
      res.redirect('http://localhost:3000/dashboard');
    } catch (err) {
      res.status(500).json({ err });
    }
  },
);

export default router;
