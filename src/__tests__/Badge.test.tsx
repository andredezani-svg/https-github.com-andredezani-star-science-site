import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Badge from '@/components/Badge'

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('applies default variant styles', () => {
    const { container } = render(<Badge>Default</Badge>)
    const span = container.firstChild
    expect(span).toHaveClass('bg-turquoise/10', 'text-turquoise')
  })

  it('applies custom variant', () => {
    const { container } = render(<Badge variant="violet">Violet</Badge>)
    const span = container.firstChild
    expect(span).toHaveClass('bg-violet/10', 'text-violet-dark')
  })

  it('applies custom className', () => {
    const { container } = render(<Badge className="extra-class">Styled</Badge>)
    const span = container.firstChild
    expect(span).toHaveClass('extra-class')
  })
})
