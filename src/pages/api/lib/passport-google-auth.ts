import passportGoogle from 'passport-google-oauth20';
import passport from 'passport';

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: 'http://localhost:3000/api/auth/redirect/google',
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) =>
      done(null, { accessToken }),
  ),
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

passport.deserializeUser((user: any, cb: (arg0: null, arg1: any) => any) => {
  process.nextTick(() => cb(null, user));
});

export default passport;
