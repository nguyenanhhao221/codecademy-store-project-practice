import React from "react";

import { getCurrencySymbol } from "../../utilities/utilities";
import { inventoryData } from "../../data";

export const Inventory = ({ currencyFilter }) => {
    return (
        <ul className="inventory-container" id="inventory-container">
            {inventoryData.map(item =>
                <li className="item">
                    <img
                        src={item.img}
                        alt={`${item.name} images`}
                    />
                    <h3>{item.name}</h3>
                    {/* use the current state of currencyFilter to determine which currency symbol and character to display */}
                    <h3 className="price">{`${getCurrencySymbol(currencyFilter)}${item.price} ${currencyFilter}`}</h3>
                    <button className="add-to-cart-button">Add to Cart</button>
                </li>)}
        </ul>
    )
}