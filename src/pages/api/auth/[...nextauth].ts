/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        url: 'https://accounts.google.com/o/oauth2/v2/auth', // ?approval_prompt=force&access_type=offline&response_type=code
        params: {
          scope:
            'email profile https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/logging.read',
          access_type: 'offline',
          prompt: 'consent',
          response_type: 'code',
        },
      },
    }),
  ],

  secret: process.env.SECRET,
  callbacks: {
    async jwt(token) {
      if (token.account?.access_token) {
        token.token.accessToken = token.account.access_token;
      }

      if (token.account?.refresh_token) {
        token.token.refreshToken = token.account.refresh_token;
      }

      if (token.account?.expires_at) {
        token.token.expiresIn = token.account.expires_at * 1000;
      }

      if (token.user?.id) {
        token.token.userId = token.user.id;
      }

      console.log('TOKEN. ACCOUNT.USERID', token.account?.providerAccountId);
      console.log('TOKEN. ACCOUNT', token.user?.id);

      console.log('TOKE.TOLKRET', token.token);

      return token.token;
    },
  },
});
