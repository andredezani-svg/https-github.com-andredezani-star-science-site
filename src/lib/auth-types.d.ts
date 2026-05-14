import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      role: 'customer' | 'admin'
    }
  }

  interface User {
    role?: 'customer' | 'admin'
  }
}
