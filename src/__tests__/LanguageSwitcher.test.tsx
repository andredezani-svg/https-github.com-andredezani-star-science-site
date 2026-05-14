import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import LanguageSwitcher from '@/components/LanguageSwitcher'

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders language button', () => {
    render(<LanguageSwitcher />)
    const button = screen.getByLabelText('Switch language')
    expect(button).toBeInTheDocument()
  })

  it('opens dropdown on click', () => {
    render(<LanguageSwitcher />)
    const button = screen.getByLabelText('Switch language')
    fireEvent.click(button)
    expect(screen.getByText('Português')).toBeInTheDocument()
    expect(screen.getByText('Español')).toBeInTheDocument()
    expect(screen.getByText('Français')).toBeInTheDocument()
    expect(screen.getByText('Deutsch')).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', () => {
    render(<LanguageSwitcher />)
    fireEvent.click(screen.getByLabelText('Switch language'))
    expect(screen.getByText('Português')).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(screen.queryByText('Português')).not.toBeInTheDocument()
  })
})
