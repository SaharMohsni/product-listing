/**
 *
 * The filter section : containing two filter section by company name and by tag
 *
 */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Skeleton } from 'antd';
import { isEmpty } from 'lodash';
import { FilterOutlined } from '@ant-design/icons';
import './filter-section.css';
import FilterComponent from '../../shared/components/filterComponent/FilterComponent';
import CustomModal from '../../shared/components/customModal/CustomModal';
import * as skeleton from '../../utils/loading.skeleton.helper';
import { useMobile } from '../../utils/useMobile';
import { handleSearch } from '../../shared/components/filterComponent/helper';
import { selectErrors, selectLoading, selectSearchParams } from '../../features/selectors/products.selectors';
import { handleNavigationQuery } from '../../utils/helper';
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
	const isMobileVersion = useMobile();
	const loading = useSelector(selectLoading);
	const errors = useSelector(selectErrors);
	const searchParams = useSelector(selectSearchParams);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const showFilterModal = () => {
		setFilterModalVisible(true);
	};

	const handleSubmit = () => {
		let navigationQuery = handleNavigationQuery(searchParams); // generate navigation query of data from the store
		navigate(navigationQuery); // making the search product works using the route path ( case of sinding product with specific search query)
		dispatch(searchProducts(searchParams));

		if (!loading.getSearchParams && isEmpty(errors.fetchingProductByPage)) {
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
								loading={loading.fetchingProductByPage}
								title={firstFilterTitle}
								optionsList={handleSearch(firstFilterOptionsList, firstFilterSearchedValue)}
								setSearchedValue={setFirstFilterSearchedValue}
								filterKey="manufacturer"
							/>
							<FilterComponent
								loading={loading.fetchingProductByPage}
								title={secondFilterTitle}
								optionsList={handleSearch(secondFilterOptionsList, secondFilterSearchedValue)}
								setSearchedValue={setSecondFilterSearchedValue}
								filterKey="tags"
							/>
						</CustomModal>
					)}
				</div>
			);
		}
		return (
			<div>
				<FilterComponent
					loading={loading.fetchingProductByPage}
					title="Brands"
					optionsList={handleSearch(firstFilterOptionsList, firstFilterSearchedValue)}
					setSearchedValue={setFirstFilterSearchedValue}
					filterKey="manufacturer"
				/>
				<FilterComponent
					loading={loading.fetchingProductByPage}
					title="Tags"
					optionsList={handleSearch(secondFilterOptionsList, secondFilterSearchedValue)}
					setSearchedValue={setSecondFilterSearchedValue}
					filterKey="tags"
				/>
			</div>
		);
	};

	return <div className="filter-section "> {renderFilterSection()} </div>;
};
export default FilterSection;
