import queryString from 'query-string';

export const serialize = function(obj: any) {
	var str = [];
	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	return str.join('&');
};

export const handleNavigationQuery = (search: string, page: number, limit: number) => {
	let query = queryString.parse(search);
	query = { ...query, page: page.toString(), limit: limit.toString() };
	return `${serialize(query)}`;
};

export const getURLSearchParams = (location: any, limit: number) => {
	if (location.pathname === '/') {
		return {
			page: '1',
			limit: limit.toString(),
			sortVariable: '',
			sortType: ''
		};
	} else {
		let cleanPathName = location.pathname.split('/');
		let query = queryString.parse(cleanPathName[1]);
		return {
			page: query.page,
			limit: limit.toString(),
			sortVariable: '',
			sortType: ''
		};
	}
};
