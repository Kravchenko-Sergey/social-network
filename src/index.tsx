import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom'
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
