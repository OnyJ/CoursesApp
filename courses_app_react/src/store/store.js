import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({

})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware) ); 
store.subscribe(() => console.log(store.getState()));

export default store;