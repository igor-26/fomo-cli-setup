import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/global.css'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta name='description' content='fomo-cli' />
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content='fomo-cli' />
				<meta
					property='og:description'
					content='Browse social media from the comfort of your terminal.'
				/>
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/igor-26/fomo-cli/master/assets/usage_twitter.png'
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
