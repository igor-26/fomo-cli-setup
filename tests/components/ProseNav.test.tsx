import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProseNav from 'components/prose/ProseNav'
import { INTEGRATION_ITEMS } from 'lib/constants'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			asPath: '/',
		}
	},
}))

describe('Prose nav', () => {
	const mockRouter = jest.spyOn(require('next/router'), 'useRouter')
	const firstIntegrationItem = INTEGRATION_ITEMS[0]
	const secondIntegrationItem = INTEGRATION_ITEMS[1]
	const secondToLastIntegrationItem =
		INTEGRATION_ITEMS[INTEGRATION_ITEMS.length - 2]
	const lastIntegrationItem = INTEGRATION_ITEMS[INTEGRATION_ITEMS.length - 1]

	it('renders without crashing', () => {
		mockRouter.mockImplementation(() => ({
			asPath: firstIntegrationItem.href,
		}))

		render(<ProseNav navItems={INTEGRATION_ITEMS} />)
	})

	it('renders the last integration as previous and the second as next if the first integration is active', () => {
		mockRouter.mockImplementation(() => ({
			asPath: firstIntegrationItem.href,
		}))

		render(<ProseNav navItems={INTEGRATION_ITEMS} />)

		expect(
			screen.getByRole('link', { name: `Next ${secondIntegrationItem.label}` })
		).toHaveAttribute('href', secondIntegrationItem.href)
		expect(
			screen.getByRole('link', {
				name: `Previous ${lastIntegrationItem.label}`,
			})
		).toHaveAttribute('href', lastIntegrationItem.href)
	})

	it('renders the first integration as next and the second to last as previous if the last integration is active', () => {
		mockRouter.mockImplementation(() => ({
			asPath: lastIntegrationItem.href,
		}))

		render(<ProseNav navItems={INTEGRATION_ITEMS} />)

		expect(
			screen.getByRole('link', { name: `Next ${firstIntegrationItem.label}` })
		).toHaveAttribute('href', firstIntegrationItem.href)
		expect(
			screen.getByRole('link', {
				name: `Previous ${secondToLastIntegrationItem.label}`,
			})
		).toHaveAttribute('href', secondToLastIntegrationItem.href)
	})
})
