import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { inventorySliceReducer } from '../features/inventory/inventorySlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

const reducers = {
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer,
    inventory: inventorySliceReducer,
    cart: cartReducer
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;