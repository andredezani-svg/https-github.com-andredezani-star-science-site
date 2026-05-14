import { auth, signIn } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { SITE_NAME } from '@/lib/constants'

export const metadata = {
  title: 'Sign In',
  description: `Sign in to your ${SITE_NAME} account.`,
}

export default async function LoginPage({ searchParams }) {
  const session = await auth()
  if (session?.user) redirect('/')

  const params = await searchParams
  const callbackUrl = params?.callbackUrl || '/'

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-mesh px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-dark mb-2">Sign In</h1>
        <p className="text-gray-600 mb-8">Access your {SITE_NAME} account</p>

        <form
          action={async (formData) => {
            'use server'
            await signIn('resend', { email: formData.get('email'), redirectTo: callbackUrl })
          }}
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet to-violet-dark text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            Send Magic Link
          </button>
        </form>
      </div>
    </div>
  )
}
