import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'; 

// reducers
import MapReducer from './Redux/reducers/map.reducer'
import RadioReducer from './Redux/reducers/radio.reducer'
import LoadingReducer from './Redux/reducers/loading.reducer'
import ModalReducer from './Redux/reducers/modal.reducer'



const rootReducer = combineReducers({
    MapReducer,
    RadioReducer,
    LoadingReducer,
    ModalReducer

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

