import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import modalReducer from '../redux/modalRedux';

// define initial state and shallow-merge initial data
const initialState = {
  modal: {visible: false},
};

// define reducers
const reducers = {
  form: formReducer,
  modal: modalReducer,
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
  composeWithDevTools()
);

