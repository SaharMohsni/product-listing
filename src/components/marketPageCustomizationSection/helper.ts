export const formatData = (data: any) => {
	return data.map((el: any) => {
		return { id: el.slug, value: el.name };
	});
};
