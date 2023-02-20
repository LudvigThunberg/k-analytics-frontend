/* eslint-disable @typescript-eslint/no-unused-vars */
import { Account, Profile, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

interface UserProfile {
  user: {
    username: string;
    email: string;
  };
  account: {
    access_token: string;
  };
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        url: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=online&response_type=code',
        params: {
          scope:
            'email profile https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/logging.read',
        },
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token) {
      if (token.account?.access_token) {
        // eslint-disable-next-line no-param-reassign
        token.token.accessToken = token.account.access_token;
      }

      return token.token;
    },
  },
});
