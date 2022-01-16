import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Skeleton } from 'antd';
import { ColumnHeightOutlined } from '@ant-design/icons';
import './sorting-section.css';
import SortingComponent from './sortingComponent/SortingComponent';

import CustomModal from '../../../shared/components/customModal/CustomModal';

import { useMobile } from '../../../utils/useMobile';
import * as skeleton from '../../../utils/loading.skeleton.helper';
import { selectLoading } from '../../../features/selectors/products.selectors';

const SortingSection = () => {
	const [ sortModalVisible, setSortModalVisible ] = useState(false);
	const isMobileVersion = useMobile();
	const loading = useSelector(selectLoading);

	const showSortModal = () => {
		setSortModalVisible(true);
	};
	const handleSubmit = () => {
		console.log('action submitted');
	};
	const handleCancel = () => {
		setSortModalVisible(false);
		console.log('action canceled', sortModalVisible);
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
							setModalVisible={showSortModal}
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
