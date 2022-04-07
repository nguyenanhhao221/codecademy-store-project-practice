
import { inventoryData } from "../../data";
export const loadData = () => {
    return {
        type: 'inventory/loadData',
        payload: inventoryData,
    };
};

const initialState = [];
export const inventorySliceReducer = (inventory = initialState, action) => {
    switch (action.type) {
        case 'inventory/loadData':
            return action.payload

        default:
            return inventory
    }
};

