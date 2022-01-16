/**
 *
 * Filter component : reuseable component
 *
 */

import React, { useState } from 'react';
import { Checkbox, Skeleton, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './filter-component.css';

import * as skeleton from '../../../utils/loading.skeleton.helper';
import { getSearchParams } from '../../../features/actions/products.actions';
import { selectSearchParams } from '../../../features/selectors/products.selectors';
import { createCheckedAllDataStructure, formatFilterDataStructure, getCheckboxCurrentValues } from './helper';

interface IOwnProps {
	loading: boolean;
	title: string;
	optionsList: { id: number; value: string }[];
	setSearchedValue: (value: string) => void;
	filterKey: string;
}
const FilterComponent: React.FC<IOwnProps> = ({ loading, title, optionsList, setSearchedValue, filterKey }) => {
	const [ checkAll, setCheckAll ] = useState(false);
	const dispatch = useDispatch();
	const searchParams = useSelector(selectSearchParams);

	const handleChange = (e: any) => {
		let filterData = formatFilterDataStructure(filterKey, e);
		return dispatch(getSearchParams(filterData));
	};
	const onCheckAllChange = (e: any) => {
		setCheckAll(e.target.checked);
		let afterCheckAllData = e.target.checked ? createCheckedAllDataStructure(optionsList) : [];
		let filterData = formatFilterDataStructure(filterKey, afterCheckAllData);
		return dispatch(getSearchParams(filterData));
	};

	const handleSearchInputChange = (e: any) => {
		setSearchedValue(e.target.value);
	};
	return (
		<div className="filter-component ">
			<Skeleton {...skeleton.labelSkeleton(loading)}>
				<div className="section-block-header">{title}</div>
			</Skeleton>
			<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(loading)}>
				<div className="filter-component__data section-block">
					<div className="filter-component_search-bar-container">
						<Input
							className="filter-component_search-bar-container__search-bar"
							placeholder={`search ${title}`}
							onChange={handleSearchInputChange}
						/>
					</div>
					<div className="filter-component__filter-options-container box global-scroll">
						<Checkbox onChange={onCheckAllChange} checked={checkAll}>
							All
						</Checkbox>
						<Checkbox.Group
							style={{ width: '100%' }}
							onChange={(e) => handleChange(e)}
							className="global-flex-column-h-start-v-start "
							value={getCheckboxCurrentValues(searchParams, filterKey)}
						>
							{optionsList.map((option: any) => {
								return (
									<Checkbox key={option.id} value={option.id}>
										{option.value}
									</Checkbox>
								);
							})}
						</Checkbox.Group>
					</div>
				</div>
			</Skeleton>
		</div>
	);
};
export default FilterComponent;
