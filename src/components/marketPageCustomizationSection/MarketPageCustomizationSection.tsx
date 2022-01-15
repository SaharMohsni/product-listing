import React from 'react';
import { useSelector } from 'react-redux';
import SortingSection from './sortingSection/SortingSection';
import './market-page-customization-section.css';

import FilterSection from '../filterSection/FilterSection';
import { useMobile } from '../../utils/useMobile';
import { formatData } from './helper';
import { selectBrandsList, selectTags } from '../../features/selectors/products.selectors';

const MarketPageCustomizationSection = () => {
	const brandsList = useSelector(selectBrandsList);
	const tags = useSelector(selectTags);
	const isMobileVersion = useMobile();

	return (
		<div className={`market-page-customization-section ${isMobileVersion ? 'global-flex-h-any-v-start ' : ''}`}>
			<SortingSection />
			<FilterSection
				firstFilterTitle="Brands"
				secondFilterTitle="Tags"
				firstFilterOptionsList={formatData(brandsList)}
				secondFilterOptionsList={formatData(tags)}
			/>
		</div>
	);
};

export default MarketPageCustomizationSection;
