import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

// Function to configure Passport
export default function configurePassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  // Register the Google OAuth strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id });
          if (!user) {
            user = new User({
              googleId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              password: '',
            });
            await user.save();
            try {
              let user = await User.findOne({ googleId: profile.id });
              if (!user) {
                user = new User({
                  googleId: profile.id,
                  firstName: profile.name.givenName,
                  lastName: profile.name.familyName,
                  email: profile.emails[0].value,
                });
                await user.save();
              }

              const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
              });

              return done(null, { user, token });
            } catch (err) {
              return done(err, false);
            }
          }
          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      },
    ),
  );
}
