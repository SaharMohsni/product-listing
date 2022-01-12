import React from 'react';
import './tag-filter.css';
interface IOwnProps {
	itemType: { id: number; type: string };
	activeTagKey: number;
	// setActiveTagKey: () => void;
}

const TagFilter: React.FC<IOwnProps> = ({ itemType, activeTagKey }) => {
	const handleActivationTag = () => {
		// setActiveTagKey();
		console.log(itemType.id);
	};
	return (
		<div
			className={`${itemType.id === activeTagKey &&
				'active-tag'} tag-filter-section global-flex-h-center-v-center`}
			onClick={handleActivationTag}
		>
			{itemType.type}
		</div>
	);
};

export default TagFilter;
