import React from 'react';
import './App.css';
import Control from './Components/Control';
import { Result } from './Components/Result';

const App: React.FC = () => {
	return (
		<div className="container app d-flex justify-content-center align-items-center">
			<form className="form-app">
				<Control/>
				<Result/>
			</form>
		</div>
	);
}

export default App;
