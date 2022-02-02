import React from 'react';
import { render } from '../../../../utils/testing';
import TagFilter, { IOwnProps } from '../TagFilter';

describe('Render TagFilter', () => {
	const defaultProps: IOwnProps = {
		itemType: { id: '', value: '' },
		activeTagKey: '',
		setActiveTagKey() {
			return;
		}
	};
	const { container } = render(<TagFilter {...defaultProps} />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
