import Index from 'pages/index'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			asPath: '/',
		}
	},
}))

describe('Index page', () => {
	it('renders without crashing', () => {
		render(<Index />)
	})

	it('has a heading, GitHub star and a link to /integrations', () => {
		render(<Index />)

		expect(
			screen.getByRole('heading', {
				name: /Browse social media from the comfort of your terminal./i,
			})
		)
		expect(screen.getByLabelText('Star igor-26/fomo-cli on GitHub'))
		expect(
			screen.getByRole('link', { name: /set up integrations/i })
		).toHaveAttribute('href', '/integrations')
	})

	it('matches snapshot', () => {
		const { container } = render(<Index />)
		expect(container).toMatchSnapshot()
	})
})
