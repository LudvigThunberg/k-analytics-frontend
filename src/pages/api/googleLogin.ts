import nextConnect from 'next-connect';
import passport from './lib/passport-google-auth';

export default nextConnect()
  .use(passport.initialize())
  .get(
    passport.authenticate('google', {
      scope: [
        'email',
        'profile',
        'https://www.googleapis.com/auth/analytics.readonly',
        'https://www.googleapis.com/auth/analytics',
        'https://www.googleapis.com/auth/logging.read',
      ],
    }),
  );
