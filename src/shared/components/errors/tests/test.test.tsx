import React from 'react';
import { render } from '../../../../utils/testing';
import ErrorComponent from '../ErrorComponent';

describe('ErrorComponent', () => {
	const { container } = render(<ErrorComponent />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
