import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// ^^ wraps round app and router to allow store access to all children components
import { createStore } from 'redux'
// ^^ this store holds state tree of app
import { composeWithDevTools } from 'redux-devtools-extension'
// ^^ this allows to view store in dev tools for debugging
import rootReducer from './reducers'
// ^^ first argument in createStore to allow use of all reducers
import App from './components/App'
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
