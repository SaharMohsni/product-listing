import React from 'react';
import { render } from '../../../utils/testing';
import ProductsStoreSection from '../ProductsStoreSection';

describe('ProductsStore Section', () => {
	const { container } = render(<ProductsStoreSection />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
