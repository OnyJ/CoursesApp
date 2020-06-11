import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import accountAuthReducer from './reducers/accountAuthReducer';
import createCategoryReducer from './reducers/adminDashboardReducer';


const rootReducer = combineReducers({
    auth: accountAuthReducer,
    admin: createCategoryReducer

})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); 
store.subscribe(() => console.log(store.getState()));

export default store;