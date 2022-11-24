module.exports = {
	// this will check Typescript files
	'**/*.(ts|tsx)': () => 'tsc --noEmit',

	'**/*.(ts|tsx|js)': (filenames) => [
		`eslint --fix ${filenames.join(' ')}`,
		`prettier --write ${filenames.join(' ')}`,
	],
}
