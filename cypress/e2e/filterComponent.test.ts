describe('Filter component test', () => {
	it('Successfully get companies list', () => {
		cy.visit('/market').request('/companies').then((response) => {
			if (response.status === 200) {
				cy
					.get('.filter-component')
					.then(($el) => {
						if ($el.find('.ant-checkbox-wrapper').length) return '.ant-checkbox-wrapper';
					})
					.should('be.visible');
			}
		});
	});
	it('Failed to get companies list', () => {
		cy.visit('/market').request('/companies').then((response) => {
			if (response.status !== 200) {
				cy
					.get('.filter-component')
					.then(($el) => {
						if ($el.find('.ant-checkbox-wrapper').length) return '.ant-empty';
					})
					.should('be.visible');
			}
		});
	});
});
export {};
