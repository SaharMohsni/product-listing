/**
 *
 * Sorting section : containing the sorting component and rendered on a modal on mobile version
 *
 */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Skeleton } from 'antd';
import { ColumnHeightOutlined } from '@ant-design/icons';
import './sorting-section.css';
import SortingComponent from './sortingComponent/SortingComponent';
import CustomModal from '../../../shared/components/customModal/CustomModal';
import { useMobile } from '../../../utils/useMobile';
import * as skeleton from '../../../utils/loading.skeleton.helper';
import { selectErrors, selectLoading, selectSearchParams } from '../../../features/selectors/products.selectors';
import { handleNavigationQuery } from '../../../utils/helper';
import { searchProducts } from '../../../features/actions/products.actions';
import { isEmpty } from 'lodash';

const SortingSection = () => {
	const [ sortModalVisible, setSortModalVisible ] = useState(false);
	const isMobileVersion = useMobile();
	const loading = useSelector(selectLoading);
	const errors = useSelector(selectErrors);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const searchParams = useSelector(selectSearchParams);

	const showSortModal = () => {
		setSortModalVisible(true);
	};
	const handleSubmit = () => {
		let navigationQuery = handleNavigationQuery(searchParams);
		navigate(navigationQuery);
		dispatch(searchProducts(searchParams));
		if (!loading.getSearchParams && isEmpty(errors.fetchingProductByPage)) {
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
					<Skeleton {...skeleton.fullRowItemSkeleton(loading.fetchingProductByPage)}>
						<Button type="primary" onClick={showSortModal}>
							Sort
							<ColumnHeightOutlined />
						</Button>
					</Skeleton>
					{sortModalVisible && (
						<CustomModal
							title="Sorting"
							modalVisible={sortModalVisible}
							loading={loading.fetchingProductByPage}
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
