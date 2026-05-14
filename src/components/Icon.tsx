'use client'

const icons = {
  check: {
    paths: [{ d: 'M5 13l4 4L19 7', strokeWidth: 2 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'check-thin': {
    paths: [{ d: 'M5 13l4 4L19 7', strokeWidth: 3 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'check-circle': {
    paths: [{ d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  shield: {
    paths: [{ d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  trophy: {
    paths: [{ d: 'M5 3h14M9 3v2a7 7 0 01-7 7h0a7 7 0 014 6.37M15 3v2a7 7 0 017 7h0a7 7 0 01-4 6.37M12 21v-4', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'star-filled': {
    paths: [{ d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' }],
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    stroke: 'none',
  },
  'star-outline': {
    paths: [{ d: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  box: {
    paths: [
      { d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', strokeWidth: 1.5 },
    ],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  plus: {
    paths: [{ d: 'M12 6v6m0 0v6m0-6h6m-6 0H6', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  eye: {
    paths: [
      { d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z', strokeWidth: 1.5 },
      { d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', strokeWidth: 1.5 },
    ],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  gear: {
    paths: [
      { d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', strokeWidth: 1.5 },
      { d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z', strokeWidth: 1.5 },
    ],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  tag: {
    paths: [{ d: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  flask: {
    paths: [{ d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  palette: {
    paths: [{ d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  phone: {
    paths: [{ d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', strokeWidth: 2 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  email: {
    paths: [{ d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', strokeWidth: 2 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'map-pin': {
    paths: [
      { d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', strokeWidth: 2 },
      { d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z', strokeWidth: 2 },
    ],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'arrow-right': {
    paths: [{ d: 'M17 8l4 4m0 0l-4 4m4-4H3', strokeWidth: 2 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'arrow-left': {
    paths: [{ d: 'M7 16l-4-4m0 0l4-4m-4 4h18', strokeWidth: 2 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'chevron-down': {
    paths: [{ d: 'M19 9l-7 7-7-7', strokeWidth: 2 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  lightbulb: {
    paths: [{ d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  users: {
    paths: [{ d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
  'info-circle': {
    paths: [{ d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', strokeWidth: 1.5 }],
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
  },
}

interface IconProps {
  name: string
  className?: string
  ariaHidden?: boolean
}

export default function Icon({ name, className = 'w-5 h-5', ariaHidden = true }: IconProps) {
  const icon = icons[name as keyof typeof icons]
  if (!icon) return null

  return (
    <svg
      className={className}
      fill={icon.fill}
      stroke={icon.stroke}
      viewBox={icon.viewBox}
      aria-hidden={ariaHidden}
    >
      {icon.paths.map((p: { d: string; strokeWidth?: number }, i: number) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={p.strokeWidth || 2} d={p.d} />
      ))}
    </svg>
  )
}
