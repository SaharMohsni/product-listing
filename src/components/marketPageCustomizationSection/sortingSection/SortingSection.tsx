import React, { useState } from 'react';
import { Button, Skeleton } from 'antd';
import { ColumnHeightOutlined } from '@ant-design/icons';
import './sorting-section.css';
import SortingComponent from './sortingComponent/SortingComponent';

import CustomModal from '../../../shared/components/customModal/CustomModal';

import { useMobile } from '../../../utils/useMobile';
import * as skeleton from '../../../utils/loading.skeleton.helper';

interface IOwnProps {
	setSortData: (variables: { sortVariable: string; sortType: string }) => void;
}

const SortingSection: React.FC<IOwnProps> = ({ setSortData }) => {
	const [ sortModalVisible, setSortModalVisible ] = useState(false);
	const isMobileVersion = useMobile();
	const showSortModal = () => {
		setSortModalVisible(true);
	};
	const handleSubmit = () => {
		console.log('action submitted');
		// setSortData({});
	};
	const handleCancel = () => {
		setSortModalVisible(false);
		console.log('action canceled', sortModalVisible);
	};
	const renderSortingSection = () => {
		if (isMobileVersion) {
			return (
				<div className="sorting-section__on-mobile custom-button-on-mobile">
					<Skeleton {...skeleton.fullRowItemSkeleton(false)}>
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
