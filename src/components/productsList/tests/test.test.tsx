import React from 'react';
import { render } from '../../../utils/testing';
import ProductsList, { IOwnProps } from '../ProductsList';

describe('ProductsList', () => {
	const defaultProps: IOwnProps = {
		loading: false
	};
	const { container } = render(<ProductsList {...defaultProps} />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
