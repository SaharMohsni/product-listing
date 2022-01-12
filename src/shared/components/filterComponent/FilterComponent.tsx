import React, { useState } from 'react';
import { Checkbox, Skeleton } from 'antd';
import './filter-component.css';
import { Input, Space } from 'antd';
import * as skeleton from '../../../utils/loading.skeleton.helper';

const { Search } = Input;

interface IOwnProps {
	title: string;
	optionsList: { id: number; value: string }[];
}

const FilterComponent: React.FC<IOwnProps> = ({ title, optionsList }) => {
	const [ filterValue, setFilterValue ] = useState(1);
	const handleChange = (e: any) => {
		console.log('change');
		setFilterValue(e.target.value);
	};
	const onSearch = () => {
		console.log('search');
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
						/>
					</div>
					<div className="filter-component__filter-options-container box ">
						<Checkbox.Group
							style={{ width: '100%' }}
							onChange={(e) => handleChange(e)}
							className="global-flex-column-h-start-v-start "
						>
							{optionsList.map((option) => {
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
