import React from 'react';
import { render } from '../../../../utils/testing';
import ProductCard, { IOwnProps } from '../ProductCard';

describe('ProductCard', () => {
	const defaultProps: IOwnProps = {
		product: {
			tags: [ '' ],
			price: 0,
			name: '',
			description: '',
			slug: '',
			added: 0,
			manufacturer: 0,
			itemType: ''
		},
		loading: false
	};
	const { container } = render(<ProductCard {...defaultProps} />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
