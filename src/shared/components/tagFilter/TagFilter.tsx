/**
 *
 * Tag filter component
 *
 */

import React from 'react';

import './tag-filter.css';
interface IOwnProps {
	itemType: { id: string; value: string };
	activeTagKey: string;
	setActiveTagKey: (value: string) => void;
}

const TagFilter: React.FC<IOwnProps> = ({ itemType, activeTagKey, setActiveTagKey }) => {
	const handleActivationTag = () => {
		if (activeTagKey === itemType.id) {
			setActiveTagKey('');
		} else {
			setActiveTagKey(itemType.id);
		}
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
