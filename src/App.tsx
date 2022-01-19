import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from './app/Layout/Layout';
import MarketPage from './pages/MarketPage';
import './app/global-styles.css';

function App() {
	let navigate = useNavigate();

	useEffect(() => {
		navigate('../market', { replace: true });
	}, []);

	return (
		<div className="App">
			<Layout>
				<MarketPage />
			</Layout>
		</div>
	);
}

export default App;
