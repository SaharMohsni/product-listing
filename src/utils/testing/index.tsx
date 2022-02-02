import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from '../../features/store';
const store = configureStore({});

const AllProvider = ({ children }: any): JSX.Element => (
	<Provider store={store}>
		<Router>{children}</Router>
	</Provider>
);

export const customRender = (ui: JSX.Element, { ...options } = {}) => render(ui, { wrapper: AllProvider, ...options });
export * from '@testing-library/react';
export { customRender as render };
