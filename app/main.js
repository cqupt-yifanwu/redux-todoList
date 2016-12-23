import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux' // react 和 react 的链接
import App from './components/App.js'
import todoApp from './reducers/reducers.js'

let store = createStore(todoApp);

render( <Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);