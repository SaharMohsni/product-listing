/**
 *
 * Sorting component
 *
 */
import React from 'react';
import { Radio, Space, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { isEmpty } from 'lodash';
import './sorting-component.css';
import { handleRadioButtonValues, handleRadioGroupValue } from './helper';
import * as skeleton from '../../../../utils/loading.skeleton.helper';
import { ASC_PRICE, DESC_PRICE, NEW_ADDED, OLD_ADDED, sortDataMessages } from '../../../../utils/constants';
import { selectLoading } from '../../../../features/selectors/products.selectors';
import { generateNavigationQueryFromPathName, handleNavigation } from '../../../../utils/helper';

const SortingComponent = () => {
	const loading = useSelector(selectLoading);
	const navigate = useNavigate();
	const location = useLocation();
	let query = generateNavigationQueryFromPathName(location);

	const handleChange = (e: any) => {
		let sortData = handleRadioButtonValues(e.target.value);
		if (isEmpty(sortData)) {
			handleNavigation(query, {}, navigate);
		} else {
			let newSearchParams = {
				sortVariable: sortData.sortVariable,
				sortType: sortData.sortType
			};
			handleNavigation(query, newSearchParams, navigate);
		}
	};

	return (
		<div className="sorting-component ">
			<Skeleton {...skeleton.labelSkeleton(loading.fetchingCompanies)}>
				<div className="section-block-header">Sorting</div>
			</Skeleton>
			<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(loading.fetchingCompanies)}>
				<div className="sorting-component__data section-block box global-scroll">
					<div>
						<Radio.Group onChange={(e) => handleChange(e)} value={handleRadioGroupValue(query)}>
							<Space direction="vertical">
								<Radio value={ASC_PRICE}>{sortDataMessages[ASC_PRICE]}</Radio>
								<Radio value={DESC_PRICE}>{sortDataMessages[DESC_PRICE]}</Radio>
								<Radio value={NEW_ADDED}>{sortDataMessages[NEW_ADDED]}</Radio>
								<Radio value={OLD_ADDED}>{sortDataMessages[OLD_ADDED]}</Radio>
							</Space>
						</Radio.Group>
					</div>
				</div>
			</Skeleton>
		</div>
	);
};

export default SortingComponent;
