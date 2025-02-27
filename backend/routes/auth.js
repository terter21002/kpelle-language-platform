import express from 'express';
import {
  login,
  register,
  requestPasswordReset,
  resetPassword,
} from '../controllers/authController.js';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

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
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Optionally set the token in a cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // Set this to true in production
      sameSite: 'Strict',
    });
    // Redirect to your frontend with the token
    res.redirect(`http://localhost:5173?token=${token}`);
  },
);
export default router;
