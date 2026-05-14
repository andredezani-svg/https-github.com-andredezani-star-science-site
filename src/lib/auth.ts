import NextAuth from 'next-auth'
import Resend from 'next-auth/providers/resend'
import Google from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import db from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: 'database' },
  pages: {
    signIn: '/login',
    error: '/error',
  },
  providers: [
    Resend({
      from: process.env.AUTH_EMAIL_FROM || 'noreply@starsciencelab.com',
    }),
    ...(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
      ? [Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET })]
      : []),
  ],
  callbacks: {
    async session({ session, user }) {
      const [dbUser] = await db.select().from(users).where(eq(users.email, user.email!)).limit(1)
      if (dbUser) {
        session.user.role = dbUser.role
        session.user.id = dbUser.id
      }
      return session
    },
  },
})

