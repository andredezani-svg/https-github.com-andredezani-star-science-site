import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'StarScience Lab'
    const subtitle = searchParams.get('subtitle') || 'Private Label Health Care Manufacturing'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 40%, #0f172a 100%)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-100',
              right: '-100',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'rgba(10, 186, 181, 0.12)',
              filter: 'blur(60px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-100',
              left: '-100',
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: 'rgba(124, 58, 237, 0.15)',
              filter: 'blur(60px)',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px',
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 900,
                color: 'white',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#0ABAB5',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
