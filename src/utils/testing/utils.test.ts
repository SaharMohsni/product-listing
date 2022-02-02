import { generateActionTypes } from '../generic-saga';

test('Test generateActionTypes', async () => {
	const root = 'TEST/';
	const prefix = 'THIS_IS_A_TEST';

	expect(generateActionTypes(root, prefix).request).toBe('TEST/THIS_IS_A_TEST_REQUEST');
});
