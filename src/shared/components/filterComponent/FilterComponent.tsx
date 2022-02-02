/**
 *
 * Filter component : reuseable component
 *
 */

import React, { useState } from 'react';
import { Checkbox, Skeleton, Input, Empty } from 'antd';
import { useLocation } from 'react-router-dom';

import './filter-component.css';

import * as skeleton from '../../../utils/loading.skeleton.helper';
import { createCheckedAllDataStructure, formatFilterDataStructure, getCheckboxCurrentValues } from './helper';
import { isEmpty } from 'lodash';
import { convertObjectKey, generateQueryBaseStructure, generateQueryFromPathname } from '../../../utils/helper';

export interface IOwnProps {
	loading: boolean;
	title: string;
	optionsList: { id: number; value: string }[];
	setSearchedValue: (value: string) => void;
	filterKey: string;
	setFilterData: (value: object) => void;
}
const FilterComponent: React.FC<IOwnProps> = ({
	loading,
	title,
	optionsList,
	setSearchedValue,
	filterKey,
	setFilterData
}) => {
	const [ checkAll, setCheckAll ] = useState(false);
	const location = useLocation();
	let query = generateQueryFromPathname(location.pathname);
	let searchQuery = generateQueryBaseStructure(convertObjectKey(query));

	const handleSearch = (data: any) => {
		let filterData = formatFilterDataStructure(filterKey, data);
		setFilterData(filterData);
	};
	const handleChange = (e: any) => {
		handleSearch(e);
	};
	const onCheckAllChange = (e: any) => {
		setCheckAll(e.target.checked);
		let afterCheckAllData = e.target.checked ? createCheckedAllDataStructure(optionsList) : [];
		handleSearch(afterCheckAllData);
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
					<div>
						<div className="filter-component_search-bar-container">
							<Input
								className="filter-component_search-bar-container__search-bar"
								placeholder={`search ${title}`}
								onChange={handleSearchInputChange}
							/>
						</div>
						{isEmpty(optionsList) ? (
							<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No data" />
						) : (
							<div className="filter-component__filter-options-container box global-scroll">
								<Checkbox onChange={onCheckAllChange} checked={checkAll}>
									All
								</Checkbox>
								<Checkbox.Group
									style={{ width: '100%' }}
									onChange={(e) => handleChange(e)}
									className="global-flex-column-h-start-v-start "
									value={getCheckboxCurrentValues(searchQuery, filterKey)}
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
						)}
					</div>
				</div>
			</Skeleton>
		</div>
	);
};
export default FilterComponent;
