import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from '@heroicons/react/24/solid'
import { ProseNavLink } from 'lib/types'
import Link from 'next/link'

const ProseNavLink: React.FC<ProseNavLink> = ({ href, label, direction }) => (
	<Link href={href}>
		<a className='hover:text-accent-400 no-underline flex flex-col'>
			<div className='flex items-end'>
				{direction === 'previous' && (
					<ArrowLongLeftIcon className='h-6 w-6 mr-1' />
				)}
				<p className='m-0'>
					<span className='m-0 text-zinc-500 text-md'>
						{direction === 'next' ? 'Next' : 'Previous'}
					</span>
					<span className='underline flex items-center text-lg'>{label}</span>
				</p>
				{direction === 'next' && (
					<ArrowLongRightIcon className='h-6 w-6 ml-1' />
				)}
			</div>
		</a>
	</Link>
)

export default ProseNavLink
