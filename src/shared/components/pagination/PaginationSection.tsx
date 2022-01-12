import React, { useState } from 'react';
import { Pagination } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './pagination-section.css';
const PaginationSection = () => {
	const onChange = () => {
		console.log('on change');
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
				onChange={onChange}
				total={320}
				pageSize={16}
				itemRender={itemRender}
			/>
		</div>
	);
};

export default PaginationSection;
