import { siteTitle } from 'components/Layout'
import { NavItems } from 'lib/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ProseNavLink from 'components/prose/ProseNavLink'

interface Props {
	navItems: NavItems
}

const ProseNav: React.FC<Props> = ({ navItems }) => {
	const { asPath } = useRouter()

	const currentItemIndex = navItems.findIndex((item) => item.href === asPath)
	const lastIndex = navItems.length - 1

	const previousItem =
		currentItemIndex === 0
			? navItems[lastIndex]
			: navItems[currentItemIndex - 1]
	const nextItem =
		currentItemIndex === lastIndex
			? navItems[0]
			: navItems[currentItemIndex + 1]

	return (
		<div className='flex justify-between'>
			<Head>
				<title>
					{`${siteTitle} | Integrations | ${navItems[currentItemIndex].label}`}
				</title>
			</Head>

			<ProseNavLink
				href={previousItem.href}
				label={previousItem.label}
				direction='previous'
			/>

			<ProseNavLink
				href={nextItem.href}
				label={nextItem.label}
				direction='next'
			/>
		</div>
	)
}

export default ProseNav
