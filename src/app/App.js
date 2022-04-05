import React from "react";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
export const App = props => {
    const {state, dispatch} = props;
    return (
        <div>
            <CurrencyFilter 
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
                />
        </div>
    )
}