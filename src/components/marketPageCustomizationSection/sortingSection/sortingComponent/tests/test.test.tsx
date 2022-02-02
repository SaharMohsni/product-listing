import React from 'react';
import { render } from '../../../../../utils/testing';
import SortingComponent from '../SortingComponent';

describe('SortingComponent', () => {
	const { container } = render(<SortingComponent />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
