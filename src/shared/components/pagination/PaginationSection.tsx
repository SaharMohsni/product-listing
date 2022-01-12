import React, { useState } from 'react';
import { Pagination } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './pagination-section.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleNavigationQuery } from '../../../utils/helper';
import { LIMIT_PRODUCTS_BY_Page } from '../../../utils/constants';

interface IOwnProps {
	setCurrentPage: (currentPage: number) => void;
}

const PaginationSection: React.FC<IOwnProps> = ({ setCurrentPage }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const onChange = (page: number) => {
		let navigationQuery = handleNavigationQuery(location.search, page, LIMIT_PRODUCTS_BY_Page);
		navigate(navigationQuery);
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
