import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import ageReducer from './Reducer';

const store = createStore(ageReducer);

import App from "./App";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
