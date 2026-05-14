import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ContactForm from '@/components/ContactForm'

const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/how may we help/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('has required fields marked', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/first name/i)).toBeRequired()
    expect(screen.getByLabelText(/last name/i)).toBeRequired()
    expect(screen.getByLabelText(/email/i)).toBeRequired()
  })
})
