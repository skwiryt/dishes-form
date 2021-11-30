import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

// define initial state and shallow-merge initial data
const initialState = {
};

// define reducers
const reducers = {
  form: formReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
export const store = createStore(
  storeReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

