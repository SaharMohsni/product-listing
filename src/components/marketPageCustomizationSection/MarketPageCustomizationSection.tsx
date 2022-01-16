/**
 *
 * The component responsible of all the search customization : filter by company , filter by tags and sorting
 *
 */

import { useSelector } from 'react-redux';
import SortingSection from './sortingSection/SortingSection';
import './market-page-customization-section.css';

import FilterSection from '../filterSection/FilterSection';
import { useMobile } from '../../utils/useMobile';
import { selectBrandsList, selectTags } from '../../features/selectors/products.selectors';
import { formatData } from '../../utils/helper';

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
