import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body className='bg-white text-black dark:bg-black dark:text-white font-body'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
