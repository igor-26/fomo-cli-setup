import Layout from 'components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GitHubButton from 'vendor/react-github-btn'
import { siteTitle } from 'components/Layout'

const Index: React.FC = () => (
	<Layout>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<main className='pt-16 lg:flex text-center lg:text-left'>
			<div className='lg:w-2/3'>
				<div className='mb-12 lg:max-w-xl lg:pr-16'>
					<h1 className='font-bold mb-8 text-5xl tracking-tighter'>
						Browse social media from the comfort of your{' '}
						<span className='text-accent-400'>terminal</span>.
					</h1>
					<p className='text-zinc-500 text-lg'>
						No ads, no suggested content, no fluff.
						<br />
						Only the content you are subscribed to.
					</p>
				</div>
				<div className='mb-16 flex justify-center lg:justify-start items-center'>
					<Link href='/integrations'>
						<a
							className={`font-semibold bg-accent-400 hover:opacity-90 rounded-full text-white py-2 font-semi px-5 mr-5 inline-flex`}
						>
							Set up integrations
						</a>
					</Link>
					<div className='pt-2'>
						<GitHubButton
							href='https://github.com/igor-26/fomo-cli'
							data-icon='octicon-star'
							data-size='large'
							data-show-count='true'
							aria-label='Star igor-26/fomo-cli on GitHub'
						>
							Star
						</GitHubButton>
					</div>
				</div>
			</div>
			<div className='border border-gray-200 flex rounded-md lg:rounded-xl mb-3'>
				<Image
					src='/images/fomo.gif'
					priority
					alt='fomo'
					height={529}
					width={900}
					className='rounded-md lg:rounded-xl'
				/>
			</div>
		</main>
	</Layout>
)

export default Index
