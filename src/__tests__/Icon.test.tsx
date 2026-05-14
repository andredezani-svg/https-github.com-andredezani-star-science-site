import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Icon from '@/components/Icon'

describe('Icon', () => {
  it('renders an icon by name', () => {
    const { container } = render(<Icon name="check" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('returns null for unknown icon', () => {
    const { container } = render(<Icon name="nonexistent" />)
    expect(container.innerHTML).toBe('')
  })

  it('applies custom className', () => {
    const { container } = render(<Icon name="check" className="w-8 h-8 text-red-500" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-8', 'h-8', 'text-red-500')
  })

  it('renders known icons', () => {
    const names = ['check', 'shield', 'trophy', 'phone', 'email', 'map-pin', 'arrow-right', 'chevron-down']
    for (const name of names) {
      const { container } = render(<Icon name={name} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    }
  })
})
