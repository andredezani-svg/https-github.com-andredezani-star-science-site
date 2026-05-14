import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const path = req.nextUrl.pathname
  const token = req.auth

  const protectedPaths = ['/dashboard', '/api/orders', '/api/upload']
  const adminPaths = ['/admin', '/api/admin']
  const writeMethods = ['POST', 'PUT', 'PATCH', 'DELETE']

  const isProtected = protectedPaths.some((p) => path.startsWith(p))
  const isAdmin = adminPaths.some((p) => path.startsWith(p))
  const isAdminWrite = path.startsWith('/api/blog') && writeMethods.includes(req.method)

  if (isProtected && !token) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('callbackUrl', path)
    return NextResponse.redirect(loginUrl)
  }

  if ((isAdmin || isAdminWrite) && token?.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/api/orders/:path*', '/api/upload/:path*', '/api/blog/:path*'],
}
