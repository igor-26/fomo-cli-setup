import { NavItems } from './types'

const NAV_ITEMS: NavItems = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/integrations',
		label: 'Setup',
	},
]

const INTEGRATION_ITEMS: NavItems = [
	{
		href: '/integrations/reddit',
		label: 'Reddit',
	},
	{
		href: '/integrations/twitter',
		label: 'Twitter',
	},
	{
		href: '/integrations/spotify',
		label: 'Spotify',
	},
]

export { NAV_ITEMS, INTEGRATION_ITEMS }
