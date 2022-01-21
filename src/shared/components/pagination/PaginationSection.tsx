/**
 *
 * Pagination section
 *
 */
import React from 'react';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './pagination-section.css';
import { handlePaginationValue } from './helper';
import { selectSearchProductsCount } from '../../../features/selectors/products.selectors';
import {
	convertObjectKey,
	generateQueryFromPathname,
	handleNavigation,
	generateQueryBaseStructure
} from '../../../utils/helper';

const PaginationSection = () => {
	const location = useLocation();
	const navigate = useNavigate();

	let query = generateQueryFromPathname(location.pathname);
	let searchQuery = generateQueryBaseStructure(convertObjectKey(query));

	const onChange = (page: number) => {
		handleNavigation(query, { page: page.toString() }, navigate);
	};

	const productsCount = useSelector(selectSearchProductsCount);
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
				total={productsCount}
				pageSize={16}
				itemRender={itemRender}
				current={handlePaginationValue(searchQuery)}
			/>
		</div>
	);
};

export default PaginationSection;
