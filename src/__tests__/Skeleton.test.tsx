import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Skeleton, { CardSkeleton } from '@/components/Skeleton'

describe('Skeleton', () => {
  it('renders text variant by default', () => {
    const { container } = render(<Skeleton />)
    const div = container.firstChild
    expect(div).toHaveClass('animate-pulse', 'h-4', 'w-full')
  })

  it('renders heading variant', () => {
    const { container } = render(<Skeleton variant="heading" />)
    const div = container.firstChild
    expect(div).toHaveClass('h-8', 'w-3/4')
  })

  it('renders card variant', () => {
    const { container } = render(<Skeleton variant="card" />)
    const div = container.firstChild
    expect(div).toHaveClass('h-48', 'w-full', 'rounded-2xl')
  })

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="my-4" />)
    const div = container.firstChild
    expect(div).toHaveClass('my-4')
  })
})

describe('CardSkeleton', () => {
  it('renders card skeleton structure', () => {
    const { container } = render(<CardSkeleton />)
    expect(container.firstChild).toHaveClass('rounded-2xl', 'border')
  })
})
