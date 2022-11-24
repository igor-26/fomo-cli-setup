import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { NAV_ITEMS } from 'lib/constants'
import Footer from 'components/Footer'

describe('Footer', () => {
	it('renders without crashing', () => {
		render(<Footer navItems={NAV_ITEMS} />)
	})

	it('renders links correctly', () => {
		render(<Footer navItems={NAV_ITEMS} />)

		expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
			'href',
			'/'
		)
		expect(screen.getByRole('link', { name: /setup/i })).toHaveAttribute(
			'href',
			'/integrations'
		)
		expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
			'href',
			'https://github.com/igor-26/fomo-cli'
		)
	})
})
