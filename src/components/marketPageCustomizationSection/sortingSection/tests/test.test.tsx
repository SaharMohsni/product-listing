import React from 'react';
import { render } from '../../../../utils/testing';
import SortingSection from '../SortingSection';

describe('SortingSection', () => {
	const { container } = render(<SortingSection />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
