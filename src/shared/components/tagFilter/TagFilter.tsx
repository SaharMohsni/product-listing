import React from 'react';
import { useDispatch } from 'react-redux';
import { getSearchParams } from '../../../features/actions/products.actions';

import './tag-filter.css';
interface IOwnProps {
	itemType: { id: string; value: string };
	activeTagKey: string;
	setActiveTagKey: (value: string) => void;
}

const TagFilter: React.FC<IOwnProps> = ({ itemType, activeTagKey, setActiveTagKey }) => {
	const dispatch = useDispatch();
	const handleActivationTag = () => {
		setActiveTagKey(itemType.id);
		dispatch(getSearchParams({ itemType: itemType.id }));
	};
	return (
		<div
			className={`${itemType.id === activeTagKey &&
				'active-tag'} tag-filter-section global-flex-h-center-v-center`}
			onClick={handleActivationTag}
		>
			{itemType.value}
		</div>
	);
};

export default TagFilter;
