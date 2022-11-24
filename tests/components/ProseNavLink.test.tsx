import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProseNavLink from 'components/prose/ProseNavLink'

describe('Prose nav link', () => {
	it('renders without crashing', () => {
		render(
			<ProseNavLink label='test' href='/integrations/reddit' direction='next' />
		)
	})

	it('renders correct link for next integration', () => {
		render(
			<ProseNavLink
				label='Twitter'
				href='/integrations/twitter'
				direction='next'
			/>
		)

		expect(screen.getByRole('link', { name: 'Next Twitter' })).toHaveAttribute(
			'href',
			'/integrations/twitter'
		)
	})

	it('renders correct link for previous integration', () => {
		render(
			<ProseNavLink
				label='Spotify'
				href='/integrations/spotify'
				direction='previous'
			/>
		)

		expect(
			screen.getByRole('link', { name: 'Previous Spotify' })
		).toHaveAttribute('href', '/integrations/spotify')
	})
})
