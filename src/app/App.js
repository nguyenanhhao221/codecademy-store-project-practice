import React from "react";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Inventory } from "../features/inventory/Inventory";

export const App = props => {
    //get the state and dispatch method from store which passed into App from index.js
    const { state, dispatch } = props;
    return (
        <div>
            <CurrencyFilter
                currencyFilter={state.currencyFilter} // pass the currencyFilter state to CurrencyFilter components as props
                dispatch={dispatch} // pass the dispatch method to Currency Filter component
            />
            <Inventory 
                currencyFilter={state.currencyFilter}
            />
        </div>
    )
}