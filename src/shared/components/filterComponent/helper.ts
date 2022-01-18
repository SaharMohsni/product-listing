/**
 *
 * Filter component helper
 *
 */

import { isString } from '../../../utils/helper';

export const handleSearch = (data: any, searchedValue: string) => {
	return data.filter((obj: any) => {
		return Object.values(obj).some((val: any) => {
			return val.toLowerCase().includes(searchedValue.toLowerCase());
		});
	});
};

export const getCheckboxCurrentValues = (searchParams: any, filterKey: string) => {
	if (!searchParams[filterKey].data) {
		return [ searchParams[filterKey] ];
	}
	let res = searchParams[filterKey].data;
	if (isString(res)) {
		return [ res ];
	}
	return res;
};

export const formatFilterDataStructure = (filterKey: string, data: any) => {
	return { [filterKey]: { key: filterKey, data: data } };
};

export const createCheckedAllDataStructure = (data: any) => {
	let newDatArray = [];
	for (let el of data) {
		newDatArray.push(...Object.values(el));
	}
	return newDatArray;
};
