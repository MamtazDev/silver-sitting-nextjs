import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'



// appid: 842448700622447
// secret: 34b414fa78166cd7ab53ef29108b946f



export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
  },
})
