import Link from 'next/link'

export const metadata = {
  title: 'Authentication Error',
  description: 'An authentication error occurred.',
  robots: { index: false, follow: false },
}

export default async function ErrorPage({ searchParams }) {
  const params = await searchParams
  const error = params?.error || 'unknown'

  const messages = {
    Configuration: 'There is a problem with the server configuration.',
    AccessDenied: 'You do not have access to this resource.',
    Verification: 'The verification link is invalid or has expired.',
    OAuthSignin: 'There was a problem signing in with your provider.',
    OAuthCallback: 'There was a problem processing your sign-in request.',
    OAuthAccountNotLinked: 'This email is already associated with another sign-in method.',
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-mesh px-4">
      <div className="text-center max-w-md">
        <div className="inline-block px-4 py-1.5 bg-red-100 rounded-full text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
          Authentication Error
        </div>
        <h1 className="text-4xl font-extrabold text-dark mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8">
          {messages[error] || 'An unexpected authentication error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-gradient-to-r from-violet to-violet-dark text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="border-2 border-gray-300 text-dark px-8 py-3 rounded-lg font-bold hover:border-violet transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
