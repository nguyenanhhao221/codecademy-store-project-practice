import { createStore, combineReducers } from 'redux';
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { inventorySliceReducer } from '../features/inventory/inventorySlice';

const reducers = {
    currencyFilter: currencyFilterReducer,
    searchTerm: '',
    inventory: inventorySliceReducer
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;