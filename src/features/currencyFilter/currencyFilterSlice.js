const initialCurrencyFilter = 'USD';

export const currencyFilterReducer = (currencyFilterState = initialCurrencyFilter, action) => {
    switch (action.type) {
        case 'currencyFilter/setCurrency':
            return action.payload;
        default: {
            return currencyFilterState
        }
    }
}

export const setCurrency = currency => {
    return {
        type: 'currencyFilter/setCurrency',
        payload: currency
    }
}