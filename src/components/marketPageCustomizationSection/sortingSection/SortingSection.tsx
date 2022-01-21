/**
 *
 * Sorting section : containing the sorting component and rendered on a modal on mobile version
 *
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button, Skeleton } from 'antd';
import { ColumnHeightOutlined } from '@ant-design/icons';
import './sorting-section.css';
import SortingComponent from './sortingComponent/SortingComponent';
import CustomModal from '../../../shared/components/customModal/CustomModal';
import { useMobile } from '../../../utils/useMobile';
import * as skeleton from '../../../utils/loading.skeleton.helper';
import { selectLoading } from '../../../features/selectors/products.selectors';
import { convertObjectKey, generateNavigationQueryFromPathName } from '../../../utils/helper';
import { searchProducts } from '../../../features/actions/products.actions';

const SortingSection = () => {
	const [ sortModalVisible, setSortModalVisible ] = useState(false);
	const isMobileVersion = useMobile();
	const loading = useSelector(selectLoading);
	const location = useLocation();
	const dispatch = useDispatch();
	let lastQuery = generateNavigationQueryFromPathName(location);

	const showSortModal = () => {
		setSortModalVisible(true);
	};
	const handleSubmit = () => {
		dispatch(searchProducts(convertObjectKey(lastQuery)));
		if (!loading.getSearchParams) {
			setSortModalVisible(false);
		}
	};
	const handleCancel = () => {
		setSortModalVisible(false);
	};
	const renderSortingSection = () => {
		if (isMobileVersion) {
			return (
				<div className="sorting-section__on-mobile custom-button-on-mobile">
					<Skeleton {...skeleton.fullRowItemSkeleton(loading.fetchingCompanies)}>
						<Button type="primary" onClick={showSortModal}>
							Sort
							<ColumnHeightOutlined />
						</Button>
					</Skeleton>
					{sortModalVisible && (
						<CustomModal
							title="Sorting"
							modalVisible={sortModalVisible}
							loading={loading.fetchingCompanies}
							handleSubmit={handleSubmit}
							handleCancel={handleCancel}
						>
							<SortingComponent />
						</CustomModal>
					)}
				</div>
			);
		} else return <SortingComponent />;
	};

	return <div className="sorting-section ">{renderSortingSection()}</div>;
};

export default SortingSection;
