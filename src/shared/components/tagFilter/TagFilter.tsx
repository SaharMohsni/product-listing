/**
 *
 * Tag filter component
 *
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './tag-filter.css';
import { generateNavigationQueryFromPathName, handleNavigation } from '../../../utils/helper';
interface IOwnProps {
	itemType: { id: string; value: string };
	activeTagKey: string;
	setActiveTagKey: (value: string) => void;
}

const TagFilter: React.FC<IOwnProps> = ({ itemType, activeTagKey, setActiveTagKey }) => {
	const location = useLocation();
	const navigate = useNavigate();
	let lastQuery = generateNavigationQueryFromPathName(location);

	const handleActivationTag = () => {
		setActiveTagKey(itemType.id);
		let newSearchParams = { itemType: itemType.id };
		handleNavigation(lastQuery, newSearchParams, navigate);
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
