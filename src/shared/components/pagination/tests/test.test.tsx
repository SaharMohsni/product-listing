import React from 'react';
import { render } from '../../../../utils/testing';
import PaginationSection from '../PaginationSection';

describe('Render Pagination section', () => {
	const { container } = render(<PaginationSection />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
