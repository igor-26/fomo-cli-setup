import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { Anchor, MetaLink } from 'lib/types'
import Link from 'next/link'

const ExternalLink: React.FC<Anchor> = ({ href, label }) => (
	<Link href={href} passHref>
		<a
			target='_blank'
			rel='noopener noreferrer'
			className='hover:text-accent-400 inline-flex'
		>
			<span className='inline-flex items-center'>
				<span className='mr-0.5'>{label}</span>
				<ArrowTopRightOnSquareIcon
					aria-label='External link icon'
					className='w-4 h-4'
				/>
			</span>
		</a>
	</Link>
)

const InternalLink: React.FC<Anchor> = ({ href, label }) => (
	<Link href={href}>
		<a className='hover:text-accent-400'>{label}</a>
	</Link>
)

const MetaLink: React.FC<MetaLink> = ({ label, href, isExternal }) => {
	return isExternal ? (
		<ExternalLink label={label} href={href} />
	) : (
		<InternalLink label={label} href={href} />
	)
}

export default MetaLink
