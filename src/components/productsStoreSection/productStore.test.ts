import React from 'react';
import * as ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';

describe('Product store component tests', () => {
	let container: HTMLDivElement;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});
});
