export const handleSearch = (data: any, searchedValue: string) => {
	return data.filter((obj: any) => {
		return Object.values(obj).some((val: any) => {
			return val.toLowerCase().includes(searchedValue.toLowerCase());
		});
	});
};
