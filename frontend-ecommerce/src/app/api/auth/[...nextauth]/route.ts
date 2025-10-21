import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import type { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = {
  theme: {
    brandColor: '#f8f8f8',
    colorScheme: 'light',
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
