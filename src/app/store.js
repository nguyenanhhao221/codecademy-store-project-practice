import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { inventorySliceReducer } from '../features/inventory/inventorySlice';

const reducers = {
    currencyFilter: currencyFilterReducer,
    searchTerm: '',
    inventory: inventorySliceReducer,
    cart: cartReducer
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;