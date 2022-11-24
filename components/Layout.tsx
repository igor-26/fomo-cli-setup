import Footer from 'components/Footer'
import Header from 'components/Header'
import { NAV_ITEMS } from 'lib/constants'

const siteTitle = 'fomo-cli'

interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
	<div className='flex flex-col justify-between min-h-screen'>
		<div className='border-b border-gray-200 dark:border-gray-800 pb-8 relative flex-1'>
			<div className='container mx-auto p-4'>
				<Header navItems={NAV_ITEMS} />
				<main>{children}</main>
			</div>
		</div>
		<div className='container mx-auto'>
			<Footer navItems={NAV_ITEMS} />
		</div>
	</div>
)

export { siteTitle, Layout as default }
