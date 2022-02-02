import React from 'react';
import { render } from '../../../utils/testing';
import BasketDrawer from '../BasketDrawer';

describe('BasketDrawer', () => {
	const { container } = render(<BasketDrawer />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
