export const handleRadioButtonValues = (value: string) => {
	switch (value) {
		case '0':
			return { sortVariable: 'price', sortType: 'asc' };
		case '1':
			return { sortVariable: 'price', sortType: 'desc' };

		case '2':
			return { sortVariable: 'added', sortType: 'asc' };

		case '3':
			return { sortVariable: 'added', sortType: 'desc' };
		default:
			return { sortVariable: '', sortType: '' };
	}
};
