import React from 'react';
import { render } from '../../../utils/testing';
import MarketPageCustomizationSection from '../MarketPageCustomizationSection';

describe('Market Page Customization Section', () => {
	const { container } = render(<MarketPageCustomizationSection />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
