import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import {createStore, combineReducers} from 'redux';
import ageReducer from './Reducer';
import reducerA from './ReducerA';
import reducerB from './ReducerB';
const reducer = combineReducers({reducerA:reducerA,reducerB: reducerB,ageReducer:ageReducer})

const store = createStore(reducer);
import CombineReducer from './CombineReducer';

import App from "./App";

ReactDOM.render(<Provider store={store}><CombineReducer /></Provider>, document.getElementById("root"));
