export const handleSearch = (data: any, searchedValue: string) => {
	return data.filter((obj: any) => {
		return Object.values(obj).some((val: any) => {
			return val.toLowerCase().includes(searchedValue.toLowerCase());
		});
	});
};

export const getCheckboxCurrentValues = (searchParams: any, filterKey: string) => {
	let res = searchParams[filterKey].data;
	if (typeof res === 'string') {
		return [ res ];
	}
	return res;
};
