import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Layout, { siteTitle } from 'components/Layout'
import { INTEGRATION_ITEMS } from 'lib/constants'
import Head from 'next/head'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

const Integrations: React.FC = () => (
	<Layout>
		<Head>
			<title> {`${siteTitle} | Integrations`}</title>
		</Head>
		<div className='max-w-[672px] m-auto'>
			<section>
				<div className='border-b pb-4 border-gray-200 dark:border-gray-800 mb-6'>
					<h1 className='mb-2 text-4xl font-extrabold leading-tight font-heading'>
						Developer app setup
					</h1>
					<p className='text-lg text-gray-500 font-heading'>
						Guides on how to set up integration developer apps.
					</p>
				</div>
				<ul>
					{INTEGRATION_ITEMS.map(({ href, label }) => (
						<li key={uuidv4()}>
							<Link href={href}>
								<a className='border block border-gray-300 dark:border-gray-700 hover:bg-gray-50 hover:dark:bg-gray-900 rounded mb-5 py-3 px-5'>
									<div className='flex justify-between items-center'>
										<h2 className='text-xl font-semibold'>{label}</h2>
										<ChevronRightIcon className='w-6 h-6 text-gray-400' />
									</div>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	</Layout>
)

export default Integrations
