import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { NAV_ITEMS } from 'lib/constants'
import Header from 'components/Header'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			asPath: '/',
		}
	},
}))

describe('Navigation', () => {
	beforeEach(() => {
		const mockRouter = jest.spyOn(require('next/router'), 'useRouter')

		mockRouter.mockImplementation(() => ({
			asPath: '/integrations',
		}))
	})

	it('renders without crashing', () => {
		render(<Header navItems={NAV_ITEMS} />)
	})

	it('renders active link correctly', () => {
		const { getByRole } = render(<Header navItems={NAV_ITEMS} />)

		const renderedEl = getByRole('link', { name: /setup/i })

		expect(renderedEl).toHaveAttribute('href', '/integrations')
		expect(renderedEl).toHaveClass('hover:text-accent-400 text-accent-400', {
			exact: true,
		})
	})

	it('renders non-active link correctly', () => {
		const { getByRole } = render(<Header navItems={NAV_ITEMS} />)

		const renderedEl = getByRole('link', { name: /home/i })

		expect(renderedEl).toHaveAttribute('href', '/')
		expect(renderedEl).not.toHaveClass('text-accent-400', {
			exact: true,
		})
	})
})
