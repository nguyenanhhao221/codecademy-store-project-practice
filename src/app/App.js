import React from "react";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Inventory } from "../features/inventory/Inventory";
import { Cart } from "../features/cart/Cart";
import { SearchTerm } from "../features/searchTerm/SearchTerm";
import { getFilteredItem } from "../utilities/utilities";


export const App = props => {
    //get the state and dispatch method from store which passed into App from index.js
    const { state, dispatch } = props;
    const visibleItems = getFilteredItem(state.inventory, state.searchTerm)
    return (
        <div>
            <SearchTerm 
                searchTerm={state.searchTerm}
                dispatch={dispatch}
            />
            <CurrencyFilter
                currencyFilter={state.currencyFilter} // pass the currencyFilter state to CurrencyFilter components as props
                dispatch={dispatch} // pass the dispatch method to Currency Filter component
            />
            <Inventory
                inventory={visibleItems}
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />
            <Cart
                cart={state.cart}
                dispatch={dispatch}
                currencyFilter={state.currencyFilter}
            />


        </div>
    )
}