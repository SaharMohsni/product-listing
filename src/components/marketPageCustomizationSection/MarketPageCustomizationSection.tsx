import React from 'react';
import SortingSection from './sortingSection/SortingSection';
import './market-page-customization-section.css';

import FilterSection from '../filterSection/FilterSection';
import { useMobile } from '../../utils/useMobile';
import { formatData } from './helper';
import { IBrand } from '../../features/types/products.types';

interface IOwnProps {
	brandsList: IBrand[];
}

const MarketPageCustomizationSection: React.FC<IOwnProps> = ({ brandsList }) => {
	const isMobileVersion = useMobile();
	const brandsFilterOptionsList = formatData(brandsList);
	const tagsFilterOptionsList = [
		{ id: 0, value: 'all' },
		{ id: 1, value: 'Beach' },
		{ id: 2, value: 'People' },
		{ id: 3, value: 'Bicycle' }
	];
	return (
		<div className={`market-page-customization-section ${isMobileVersion ? 'global-flex-h-any-v-start ' : ''}`}>
			<SortingSection />
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
