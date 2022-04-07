import React, { useEffect } from "react";

import { getCurrencySymbol, calculatePrice } from "../../utilities/utilities";
import { loadData } from "./inventorySlice";

import { addItem } from "../cart/cartSlice"; //addItem action which will be used to send the item to the Cart state

//Inventory component will get inventory state,currencyFilter,dispatch from App.js
export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
    //Load data to display from the inventory state.
    const onMount = () => {
        dispatch(loadData()) //dispatch the action loadData to the store
    }
    useEffect(onMount, [dispatch]); //run onMount when component render and not re-render unless dispatch changes value
    //onClickHandler event will fired when clicked on Add To Cart button
    const onClickHandler = item => {
        dispatch(addItem(item));
    }
    if (inventory.length === 0) {
        return <p> Sorry, no products are currently available... </p>;
    }

    return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

    function createInventoryItem(inventoryItem) {
        const { price, name, img } = inventoryItem;
        const displayPrice = calculatePrice(price, currencyFilter); //calculate price for different currency value

        return (
            <li key={name} className="item">
                <img src={img} alt={''} />
                <h3>{name}</h3>
                <h3 className="price">
                    {getCurrencySymbol(currencyFilter)}
                    {displayPrice.toFixed(2)} {currencyFilter}
                </h3>
                <button
                    onClick={() => onClickHandler(inventoryItem)}
                    className="add-to-cart-button"
                >
                    Add to Cart
                </button>
            </li>
        );
    }
}