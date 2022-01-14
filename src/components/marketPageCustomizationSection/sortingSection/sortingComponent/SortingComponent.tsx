import React, { useState, useEffect } from 'react';
import { Radio, Space, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './sorting-component.css';
import * as skeleton from '../../../../utils/loading.skeleton.helper';
import { ASC_PRICE, DESC_PRICE, NEW_ADDED, OLD_ADDED } from '../../../../utils/constants';
import { handleRadioButtonValues, handleRadioGroupValue } from './helper';
import { getSearchParams } from '../../../../features/actions/products.actions';
import { selectSearchParams } from '../../../../features/selectors/products.selectors';

const SortingComponent = () => {
	const searchParams = useSelector(selectSearchParams);

	const dispatch = useDispatch();
	const handleChange = (e: any) => {
		let sortData = handleRadioButtonValues(e.target.value.toString());
		dispatch(getSearchParams({ sortVariable: sortData.sortVariable, sortType: sortData.sortType }));
	};

	return (
		<div className="sorting-component ">
			<Skeleton {...skeleton.labelSkeleton(false)}>
				<div className="section-block-header">Sorting</div>
			</Skeleton>
			<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(false)}>
				<div className="sorting-component__data section-block box">
					<Radio.Group onChange={(e) => handleChange(e)} value={handleRadioGroupValue(searchParams)}>
						<Space direction="vertical">
							<Radio value={ASC_PRICE}>Price low to high</Radio>
							<Radio value={DESC_PRICE}>Price high to low</Radio>
							<Radio value={NEW_ADDED}>New to old</Radio>
							<Radio value={OLD_ADDED}>Old to new</Radio>
						</Space>
					</Radio.Group>
				</div>
			</Skeleton>
		</div>
	);
};

export default SortingComponent;
