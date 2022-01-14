import React, { useState } from 'react';
import { Checkbox, Skeleton, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './filter-component.css';

import * as skeleton from '../../../utils/loading.skeleton.helper';
import { getSearchParams } from '../../../features/actions/products.actions';
import { selectSearchParams } from '../../../features/selectors/products.selectors';
import { getCheckboxCurrentValues } from './helper';

interface IOwnProps {
	title: string;
	optionsList: { id: number; value: string }[];
	setSearchedValue: (value: string) => void;
	filterKey: string;
}
const FilterComponent: React.FC<IOwnProps> = ({ title, optionsList, setSearchedValue, filterKey }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const searchParams = useSelector(selectSearchParams);
	const [ currentValue, setCurrentValue ] = useState('');

	const handleChange = (e: any) => {
		let filterData = {
			[filterKey]: { key: filterKey, data: e }
		};
		return dispatch(getSearchParams(filterData));
	};

	const handleSearchInputChange = (e: any) => {
		setSearchedValue(e.target.value);
	};
	return (
		<div className="filter-component ">
			<Skeleton {...skeleton.labelSkeleton(false)}>
				<div className="section-block-header">{title}</div>
			</Skeleton>
			<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(false)}>
				<div className="filter-component__data section-block">
					<div className="filter-component_search-bar-container">
						<Input
							className="filter-component_search-bar-container__search-bar"
							placeholder={`search ${title}`}
							onChange={handleSearchInputChange}
						/>
					</div>
					<div className="filter-component__filter-options-container box ">
						<Checkbox.Group
							style={{ width: '100%' }}
							onChange={(e) => handleChange(e)}
							className="global-flex-column-h-start-v-start "
							value={getCheckboxCurrentValues(searchParams, filterKey)}
						>
							{optionsList.map((option: any) => {
								return <Checkbox value={option.id}>{option.value}</Checkbox>;
							})}
						</Checkbox.Group>
					</div>
				</div>
			</Skeleton>
		</div>
	);
};
export default FilterComponent;
