describe('Testing Google', () => {
	it ('Search in google', () => {
		cy.visit('https://google.com');
		cy.get("input [ title = 'Search' ]").type('test').type('{enter}')
		cy.contains('https://wikipedia.com')
		cy.contains('https://facebook.com')
	});
});
