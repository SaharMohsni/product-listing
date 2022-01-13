import React from 'react';
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './pagination-section.css';

import { getSearchParams } from '../../../features/actions/products.actions';

const PaginationSection = () => {
	const dispatch = useDispatch();

	const onChange = (page: number) => {
		dispatch(getSearchParams({ page: page.toString() }));
	};
	function itemRender(current: any, type: any, originalElement: any) {
		if (type === 'prev') {
			return (
				<div>
					<ArrowLeftOutlined />
					<a className="previous-button-link">Previous</a>
				</div>
			);
		}
		if (type === 'next') {
			return (
				<div>
					<a className="next-button-link">Next</a>
					<ArrowRightOutlined />
				</div>
			);
		}
		return originalElement;
	}
	return (
		<div className="pagination-section">
			<Pagination
				showSizeChanger={false}
				responsive
				onChange={(page) => onChange(page)}
				total={320}
				pageSize={16}
				itemRender={itemRender}
			/>
		</div>
	);
};

export default PaginationSection;
