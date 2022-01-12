import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import SortingSection from './sortingSection/SortingSection';
import './market-page-customization-section.css';

import CustomModal from '../../shared/components/customModal/CustomModal';
import FilterSection from '../filterSection/FilterSection';
import { useMobile } from '../../utils/useMobile';

interface IOwnProps {
	setSortData: (variables: { sortVariable: string; sortType: string }) => void;
}

const MarketPageCustomizationSection: React.FC<IOwnProps> = ({ setSortData }) => {
	const isMobileVersion = useMobile();
	const brandsFilterOptionsList = [
		{ id: 0, value: 'all' },
		{ id: 1, value: 'Konopelski Group' },
		{ id: 2, value: 'Rice Inc' },
		{ id: 3, value: 'Feil, Dooley and Reinger' },
		{ id: 4, value: 'Feil, Dooley and Reinger' }
	];
	const tagsFilterOptionsList = [
		{ id: 0, value: 'all' },
		{ id: 1, value: 'Beach' },
		{ id: 2, value: 'People' },
		{ id: 3, value: 'Bicycle' }
	];
	return (
		<div className={`market-page-customization-section ${isMobileVersion ? 'global-flex-h-any-v-start ' : ''}`}>
			<SortingSection setSortData={setSortData} />
			<FilterSection
				firstFilterTitle="Brands"
				secondFilterTitle="Tags"
				firstFilterOptionsList={brandsFilterOptionsList}
				secondFilterOptionsList={tagsFilterOptionsList}
			/>
		</div>
	);
};

export default MarketPageCustomizationSection;
