import React from 'react';
import { render } from '../../../../utils/testing';
import BasketItem, { IOwnProps } from '../BasketItem';

describe('BasketItem', () => {
	const defaultProps: IOwnProps = {
		item: {
			productData: {
				tags: [ '' ],
				price: 0,
				name: '',
				description: '',
				slug: '',
				added: 0,
				manufacturer: 0,
				itemType: ''
			},
			quantity: 1
		}
	};
	const { container } = render(<BasketItem {...defaultProps} />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
