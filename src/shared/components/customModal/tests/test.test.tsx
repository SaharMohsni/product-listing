import React from 'react';
import { render } from '../../../../utils/testing';
import CustomModal, { IOwnProps } from '../CustomModal';

describe('CustomModal', () => {
	const defaultProps: IOwnProps = {
		title: '',
		loading: false,
		modalVisible: true,
		handleSubmit() {
			return;
		},
		handleCancel() {
			return;
		}
	};
	const { container } = render(<CustomModal {...defaultProps} />);
	test('should render the basic template', async () => {
		expect(container).toMatchSnapshot();
	});
});
