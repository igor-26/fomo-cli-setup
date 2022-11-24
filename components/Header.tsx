import { SunIcon } from '@heroicons/react/24/solid'
import MetaLink from 'components/MetaLink'
import { NavItems } from 'lib/types'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

interface Props {
	navItems: NavItems
}

const Header: React.FC<Props> = ({ navItems }) => {
	const { theme, setTheme } = useTheme()
	const { asPath } = useRouter()
	const ACTIVE_CLASSES: string = 'text-accent-400'

	const activeItemStyle = (
		currentPage: string,
		path: string,
		selectedStyle: string
	) => (currentPage === path ? selectedStyle : '')

	return (
		<header>
			<nav className='mb-8 flex justify-center items-center'>
				<ul className='flex gap-4 border border-gray-200 dark:border-gray-600 items-center rounded-full pl-4 pr-1 py-1'>
					{navItems.map(({ href, label }) => (
						<li key={uuidv4()}>
							<Link href={href}>
								<a
									className={`hover:text-accent-400 ${activeItemStyle(
										asPath,
										href,
										ACTIVE_CLASSES
									)}`}
								>
									{label}
								</a>
							</Link>
						</li>
					))}
					<li>
						<MetaLink
							label='GitHub'
							href='https://github.com/igor-26/fomo-cli'
							isExternal
						/>
					</li>
					<li className='hover:opacity-80 flex bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600 p-0.5'>
						<button
							title='theme-mode'
							onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
						>
							<SunIcon className='w-5 h-5 rounded-full' />
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
