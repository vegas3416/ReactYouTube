import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB79geZ-3IoDLQ_gPi5nGFSHCeSGu4-h3A';

//Create a new component. This should produce some html
const App = () => {
	return (
	  <div>
		 <SearchBar />
	  </div>
	);
}


//Take this comp. HTML and put on page(DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));