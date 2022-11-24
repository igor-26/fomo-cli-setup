import MetaLink from 'components/MetaLink'
import { NavItems } from 'lib/types'
import { v4 as uuidv4 } from 'uuid'

interface Props {
	navItems: NavItems
}

const Footer: React.FC<Props> = ({ navItems }) => (
	<footer className='pt-8 pb-16 px-4 md:flex text-center justify-between items-center'>
		<div className='flex justify-center md:justify-left mb-3 md:mb-0'>
			<ul className='flex gap-3'>
				{navItems.map(({ href, label }) => (
					<li key={uuidv4()}>
						<MetaLink label={label} href={href} />
					</li>
				))}
				<li>
					<MetaLink
						label='GitHub'
						href='https://github.com/igor-26/fomo-cli'
						isExternal
					/>
				</li>
			</ul>
		</div>
		<p className='text-sm text-zinc-400 dark:text-zinc-500 copyright-container'>
			© 2022{' '}
			<MetaLink label='igor-26' href='https://github.com/igor-26' isExternal />{' '}
			· Built with{' '}
			<MetaLink label='Next.js' href='https://nextjs.org/' isExternal />
		</p>
	</footer>
)

export default Footer
