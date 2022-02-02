import React from 'react';
import { render } from '../../../../utils/testing';
import FilterComponent, { IOwnProps } from '../FilterComponent';

describe('Render FilterComponent', () => {
	const defaultProps: IOwnProps = {
		setSearchedValue() {
			return;
		},
		loading: true,
		title: '',
		optionsList: [ { id: 0, value: '' } ],
		filterKey: '',
		setFilterData() {
			return;
		}
	};
	const { container } = render(<FilterComponent {...defaultProps} />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
