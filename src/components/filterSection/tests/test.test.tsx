import React from 'react';
import { render } from '../../../utils/testing';
import FilterSection, { IOwnProps } from '../FilterSection';

describe('FilterSection', () => {
	const defaultProps: IOwnProps = {
		firstFilterTitle: '',
		secondFilterTitle: '',
		firstFilterOptionsList: [ { id: 0, value: '' } ],
		secondFilterOptionsList: [ { id: 0, value: '' } ]
	};
	const { container } = render(<FilterSection {...defaultProps} />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
