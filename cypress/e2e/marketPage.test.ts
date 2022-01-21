describe('Market page test', () => {
	it('Successfully access the application', () => {
		cy.visit('/');
	});
	it('Failed to access the application', () => {
		cy.request('/').then((response) => {
			if (response.status !== 200) {
				cy.get('.error-component').should('be.visible');
			}
		});
	});
});
export {};
