import {createStore, applyMiddleware, compose} from 'redux';
import allReducer from "./store";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const store = createStore(
    allReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
