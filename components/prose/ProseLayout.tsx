import Layout from 'components/Layout'
import ProseNav from 'components/prose/ProseNav'
import { INTEGRATION_ITEMS } from 'lib/constants'

interface Props {
	children: React.ReactNode
}

const ProseLayout: React.FC<Props> = ({ children }) => (
	<Layout>
		<article className='max-w-[672px] mx-auto block mb-16 text-gray-700 dark:text-gray-400 prose dark:prose-invert leading-7'>
			{children}
			<br />
			<br />
			<ProseNav navItems={INTEGRATION_ITEMS} />
		</article>
	</Layout>
)

export default ProseLayout
