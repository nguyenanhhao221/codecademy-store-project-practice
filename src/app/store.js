import { createStore, combineReducers } from 'redux';
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";

const reducers = {
    currencyFilter: currencyFilterReducer,
    searchTerm: '',
    inventory: ''
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;