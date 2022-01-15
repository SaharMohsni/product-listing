import React, { useState } from 'react';

import { Button,Skeleton } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import './filter-section.css';
import FilterComponent from '../../shared/components/filterComponent/FilterComponent';
import CustomModal from '../../shared/components/customModal/CustomModal';


import * as skeleton from '../../utils/loading.skeleton.helper';
import { useMobile } from '../../utils/useMobile';
import { handleSearch } from '../../shared/components/filterComponent/helper';
interface IOwnProps {
	firstFilterTitle: string;
	secondFilterTitle: string;
	firstFilterOptionsList: { id: number; value: string }[];
	secondFilterOptionsList: { id: number; value: string }[];
}

const FilterSection: React.FC<IOwnProps> = ({ firstFilterTitle,secondFilterTitle, firstFilterOptionsList, secondFilterOptionsList}) => {
	const [ firstFilterSearchedValue, setFirstFilterSearchedValue ] = useState('');
	const [ secondFilterSearchedValue, setSecondFilterSearchedValue ] = useState('');
	const [ filterModalVisible, setFilterModalVisible ] = useState(false);
	const isMobileVersion = useMobile()

	const renderFilterSection = () => {
	    const showFilterModal = () => {
	        setFilterModalVisible(true);
	      };
          const handleSubmit = () => {
            console.log("action submitted")
            } 
            const handleCancel = () => {
                setFilterModalVisible(false)
              console.log("action canceled", filterModalVisible)
            }
	    if(isMobileVersion) {
	        return (
	            <div className='filter-section__on-mobile custom-button-on-mobile'>
						<Skeleton {...skeleton.fullRowItemSkeleton(false)}>
	            <Button type="primary" onClick={showFilterModal}>
	              Filter
                  <FilterOutlined />
	            </Button>
				</Skeleton>
	            { filterModalVisible && <CustomModal
	              title="Filter"
	              modalVisible = {filterModalVisible}
	              setModalVisible= {showFilterModal}
	              handleSubmit= {handleSubmit}
	              handleCancel = {handleCancel}
	            >
	                <FilterComponent  title={firstFilterTitle} optionsList={handleSearch(firstFilterOptionsList, firstFilterSearchedValue)} setSearchedValue = {setFirstFilterSearchedValue} filterKey = "manufacturer"/>
		            <FilterComponent  title={secondFilterTitle} optionsList={handleSearch(secondFilterOptionsList, secondFilterSearchedValue)} setSearchedValue={setSecondFilterSearchedValue} filterKey="tags"/>
	            </CustomModal>}
	          </div>
	        )
	    }
	    else return (
	        <>
	            <FilterComponent title="Brands" optionsList={handleSearch(firstFilterOptionsList, firstFilterSearchedValue)} setSearchedValue = {setFirstFilterSearchedValue} filterKey="manufacturer"  />
		        <FilterComponent title="Tags" optionsList={handleSearch(secondFilterOptionsList, secondFilterSearchedValue)} setSearchedValue = {setSecondFilterSearchedValue} filterKey="tags"/>
	        </>
	    )
	}
	return (
		<div className="filter-section ">
			{renderFilterSection()}
		</div>
	);
};
export default FilterSection;
