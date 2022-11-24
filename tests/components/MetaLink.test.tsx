import '@testing-library/jest-dom'
import { queryByLabelText, render } from '@testing-library/react'
import MetaLink from 'components/MetaLink'

describe('MetaLink', () => {
	it('renders without crashing', () => {
		render(<MetaLink label='link' href='/integrations' />)
	})

	it('renders external link correctly', () => {
		const { getByRole, queryByLabelText } = render(
			<MetaLink
				label='GitHub'
				href='https://github.com/igor-26/fomo-cli'
				isExternal
			/>
		)
        const renderedMetaLink = getByRole('link', { name: /github/i })
		const renderedIcon = queryByLabelText('External link icon')

		expect(renderedMetaLink).toBeTruthy()
		expect(renderedIcon).toBeTruthy()
		expect(renderedMetaLink).toHaveProperty('rel', 'noopener noreferrer')
		expect(renderedMetaLink).toHaveProperty(
			'href',
			'https://github.com/igor-26/fomo-cli'
		)
		expect(renderedMetaLink).toHaveProperty('target', '_blank')
	})

	it('renders internal link correctly', () => {
		const { getByRole, queryByLabelText } = render(
			<MetaLink label='Setup' href='/integrations' />
		)
		const renderedMetaLink = getByRole('link', { name: /setup/i })
		const renderedIcon = queryByLabelText('External link icon')

		expect(renderedMetaLink).toBeTruthy()
		expect(renderedIcon).toBeNull()
		expect(renderedMetaLink).not.toHaveProperty('rel', 'noopener noreferrer')
		expect(renderedMetaLink).toHaveProperty(
			'href',
			'http://localhost/integrations'
		)
		expect(renderedMetaLink).not.toHaveProperty('target', '_blank')
	})
})
