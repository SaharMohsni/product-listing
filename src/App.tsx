import React from 'react';
import Layout from './app/Layout/Layout';
import MarketPage from './pages/MarketPage';
import './app/global-styles.css';
function App() {
	return (
		<div className="App">
			<Layout>
				<MarketPage />
			</Layout>
		</div>
	);
}

export default App;
