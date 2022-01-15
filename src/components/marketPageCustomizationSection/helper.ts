import { isString } from '../../utils/helper';

export const formatData = (data: any) => {
	return data.map((el: any) => {
		if (isString(el)) {
			let slug = el.split(' ').join('-');
			return { id: slug, value: el };
		}
		return { id: el.slug, value: el.name };
	});
};
