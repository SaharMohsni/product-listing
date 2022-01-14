import React, { useState, useEffect } from 'react';
import { Checkbox, Skeleton } from 'antd';
import './filter-component.css';
import { Input } from 'antd';
import * as skeleton from '../../../utils/loading.skeleton.helper';

const { Search } = Input;

interface IOwnProps {
	title: string;
	optionsList: { id: number; value: string }[];
	setSearchedValue: (value: string) => void;
}
const FilterComponent: React.FC<IOwnProps> = ({ title, optionsList, setSearchedValue }) => {
	const handleChange = (e: any) => {
		console.log('change', e);
		// setFilterValue(e.target.value);
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
