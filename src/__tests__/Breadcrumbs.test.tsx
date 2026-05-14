import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from '@/components/Breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders home link', () => {
    render(<Breadcrumbs items={[{ label: 'Products' }]} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Home')).toHaveAttribute('href', '/')
  })

  it('renders items with links', () => {
    render(<Breadcrumbs items={[{ label: 'Products', href: '/products' }]} />)
    const link = screen.getByText('Products')
    expect(link).toHaveAttribute('href', '/products')
  })

  it('marks last item as current page', () => {
    render(<Breadcrumbs items={[{ label: 'Products' }]} />)
    const current = screen.getByText('Products')
    expect(current).toHaveAttribute('aria-current', 'page')
  })

  it('renders multiple items', () => {
    render(<Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Sports Nutrition' }]} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Sports Nutrition')).toBeInTheDocument()
  })
})
