import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AllReducers from "./reducer";

const store=createStore(AllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		
	</React.StrictMode>,
	document.getElementById("root")
);
