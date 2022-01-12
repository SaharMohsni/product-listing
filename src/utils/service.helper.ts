export const addSortToUrl = (variable: string, direction: string) =>
	variable ? `&_sort=${variable}&_order=${direction}` : '';
