import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './features/store';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
const store = configureStore({});
const baseUrl = window.location.pathname;
ReactDOM.render(
	<Provider store={store}>
		<Router basename="/market">
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
