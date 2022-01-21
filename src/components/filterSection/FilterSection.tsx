/**
 *
 * The filter section : containing two filter section by company name and by tag
 *
 */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Skeleton } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import './filter-section.css';
import FilterComponent from '../../shared/components/filterComponent/FilterComponent';
import CustomModal from '../../shared/components/customModal/CustomModal';
import * as skeleton from '../../utils/loading.skeleton.helper';
import { useMobile } from '../../utils/useMobile';
import { handleSearch } from '../../shared/components/filterComponent/helper';
import { selectLoading } from '../../features/selectors/products.selectors';
import { convertObjectKey, generateNavigationQueryFromPathName, handleNavigation } from '../../utils/helper';
import { searchProducts } from '../../features/actions/products.actions';
interface IOwnProps {
	firstFilterTitle: string;
	secondFilterTitle: string;
	firstFilterOptionsList: { id: number; value: string }[];
	secondFilterOptionsList: { id: number; value: string }[];
}

const FilterSection: React.FC<IOwnProps> = ({
	firstFilterTitle,
	secondFilterTitle,
	firstFilterOptionsList,
	secondFilterOptionsList
}) => {
	const [ firstFilterSearchedValue, setFirstFilterSearchedValue ] = useState('');
	const [ secondFilterSearchedValue, setSecondFilterSearchedValue ] = useState('');
	const [ filterModalVisible, setFilterModalVisible ] = useState(false);
	const [ brandsFilterData, setBrandsFilterData ] = useState({});
	const [ tagsFilterData, setTagsFilterData ] = useState({});
	const isMobileVersion = useMobile();
	const loading = useSelector(selectLoading);
	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let lastQuery = generateNavigationQueryFromPathName(location);
	const showFilterModal = () => {
		setFilterModalVisible(true);
	};

	useEffect(
		() => {
			handleSearchProductsQuery();
		},
		[ brandsFilterData, tagsFilterData ]
	);

	const handleSearchProductsQuery = () => {
		let newSearchParams = { ...brandsFilterData, ...tagsFilterData };
		handleNavigation(lastQuery, newSearchParams, navigate);
	};
	const handleSubmit = () => {
		dispatch(searchProducts(convertObjectKey(lastQuery)));
		if (!loading.fetchingProductByPage) {
			setFilterModalVisible(false);
		}
	};

	const handleCancel = () => {
		setFilterModalVisible(false);
	};
	const renderFilterSection = () => {
		if (isMobileVersion) {
			return (
				<div className="filter-section__on-mobile custom-button-on-mobile">
					<Skeleton {...skeleton.fullRowItemSkeleton(false)}>
						<Button type="primary" onClick={showFilterModal}>
							<span>Filter</span>
							<FilterOutlined />
						</Button>
					</Skeleton>
					{filterModalVisible && (
						<CustomModal
							title="Filter"
							modalVisible={filterModalVisible}
							handleSubmit={handleSubmit}
							handleCancel={handleCancel}
							loading={loading.fetchingProductByPage}
						>
							<FilterComponent
								loading={loading.fetchingCompanies}
								title={firstFilterTitle}
								optionsList={handleSearch(firstFilterOptionsList, firstFilterSearchedValue)}
								setSearchedValue={setFirstFilterSearchedValue}
								filterKey="manufacturer"
								setFilterData={setBrandsFilterData}
							/>
							<FilterComponent
								loading={loading.fetchingTags}
								title={secondFilterTitle}
								optionsList={handleSearch(secondFilterOptionsList, secondFilterSearchedValue)}
								setSearchedValue={setSecondFilterSearchedValue}
								filterKey="tags"
								setFilterData={setTagsFilterData}
							/>
						</CustomModal>
					)}
				</div>
			);
		}
		return (
			<div>
				<FilterComponent
					loading={loading.fetchingCompanies}
					title="Brands"
					optionsList={handleSearch(firstFilterOptionsList, firstFilterSearchedValue)}
					setSearchedValue={setFirstFilterSearchedValue}
					filterKey="manufacturer"
					setFilterData={setBrandsFilterData}
				/>
				<FilterComponent
					loading={loading.fetchingTags}
					title="Tags"
					optionsList={handleSearch(secondFilterOptionsList, secondFilterSearchedValue)}
					setSearchedValue={setSecondFilterSearchedValue}
					filterKey="tags"
					setFilterData={setTagsFilterData}
				/>
			</div>
		);
	};

	return <div className="filter-section "> {renderFilterSection()} </div>;
};
export default FilterSection;
