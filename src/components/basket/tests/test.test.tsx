import React from 'react';
import { render } from '../../../utils/testing';
import Basket from '../Basket';

describe('Basket', () => {
	const { container } = render(<Basket />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
