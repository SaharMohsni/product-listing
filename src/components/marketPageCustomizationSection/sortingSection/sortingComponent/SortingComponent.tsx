import React, { useState } from 'react';
import { Radio, Space, Skeleton } from 'antd';

import './sorting-component.css';
import * as skeleton from '../../../../utils/loading.skeleton.helper';

const SortingComponent = () => {
	const [ sortingValue, setSortingValue ] = useState(1);
	const handleChange = (e: any) => {
		console.log('change');
		setSortingValue(e.target.value);
	};

	return (
		<div className="sorting-component ">
			<Skeleton {...skeleton.labelSkeleton(false)}>
				<div className="section-block-header">Sorting</div>
			</Skeleton>
			<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(false)}>
				<div className="sorting-component__data section-block box">
					<Radio.Group onChange={(e) => handleChange(e)} value={sortingValue}>
						<Space direction="vertical">
							<Radio value={1}>Price low to high</Radio>
							<Radio value={2}>Price high to low</Radio>
							<Radio value={3}>New to old</Radio>
							<Radio value={4}>Old to new</Radio>
						</Space>
					</Radio.Group>
				</div>
			</Skeleton>
		</div>
	);
};

export default SortingComponent;
