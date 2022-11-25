describe('user flow', () => {
	it('should simulate user clicking through the individual integration pages', () => {
		/* will check this programmatically with fixtures if the number of pages gets too big */

		// start on index page
		cy.visit('http://localhost:3000/')

		// Navigate to /integrations
		cy.findByRole('link', { name: /set up integrations/i }).click()
		cy.url().should('include', '/integrations')

		// Navigate to /integrations/reddit
		cy.findByRole('link', { name: /reddit/i }).click()
		cy.url().should('include', '/integrations/reddit')

		// go next
		cy.findByRole('link', { name: /twitter/i }).click({ force: true })
		cy.url().should('include', '/integrations/twitter')

		cy.findByRole('link', { name: /spotify/i }).click({ force: true })
		cy.url().should('include', '/integrations/spotify')

		cy.findByRole('link', { name: /reddit/i }).click({ force: true })
		cy.url().should('include', '/integrations/reddit')

		// go previous
		cy.findByRole('link', { name: /spotify/i }).click({ force: true })
		cy.url().should('include', '/integrations/spotify')

		cy.findByRole('link', { name: /twitter/i }).click({ force: true })
		cy.url().should('include', '/integrations/twitter')

		cy.findByRole('link', { name: /reddit/i }).click({ force: true })
		cy.url().should('include', '/integrations/reddit')
	})

	it('leads to correct URLs when using main navigation', () => {
		// start on index page
		cy.visit('http://localhost:3000/')

		// header
		cy.get('header')
			.findByRole('link', { name: /home/i })
			.click({ force: true })
		cy.url().should('include', 'http://localhost:3000/')

		cy.get('header')
			.findByRole('link', { name: /setup/i })
			.click({ force: true })
		cy.url().should('include', '/integrations')

		// footer
		cy.get('footer')
			.findByRole('link', { name: /home/i })
			.click({ force: true })
		cy.url().should('include', 'http://localhost:3000/')

		cy.get('footer')
			.findByRole('link', { name: /setup/i })
			.click({ force: true })
		cy.url().should('include', '/integrations')
	})
})
