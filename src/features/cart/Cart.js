import React from "react";
import { changeItemQuantity } from "./cartSlice";
import { getCurrencySymbol, calculateTotal } from "../../utilities/utilities";

export const Cart = ({ cart, dispatch, currencyFilter }) => {
    //because cart's state is an Object with each key is the name of the product and each value follow each key is price and quantity. 
    //So we can extract the name of the product by using for in to loop through the cart's state object
    //After that we can work with the name, price, quantity to render by add each li create by createCartItem to an array and render
    const cartElements = [];
    for (let item in cart) {
        cartElements.push(createCartItem(item))
    }

    //event handler when quantity input of item changes
    const onInputChangeHandler = (name, input) => {
        //if the user input a bad value
        if (input === '') {
            return;
        }
        //Otherwise changes that input to a Number and save in new variable
        const newQuantity = Number(input);
        //dispatch the changeItemQuantity action to the store to update the new quantity and cart's state
        dispatch(changeItemQuantity(name, newQuantity))
    }

    //calculate total price
    const total = calculateTotal(cart, currencyFilter)
    return (
        <div id="cart-container" className="cart-container">
            <ul id="cart-items">
                {cartElements}
            </ul>
            <h3 className="total">Total
                <span className="total-value">{`${getCurrencySymbol(currencyFilter)}${total} ${currencyFilter}`}</span>
            </h3>

        </div>
    )

    //the name argument will be passed by using for...in above
    //createCartItem function to create JSX for the Cart component's value
    function createCartItem(name) {
        const item = cart[name];

        return (
            <li
                key={name}>
                <p>{name}</p>
                <select
                    className="item-quantity"
                    value={item.quantity}
                    // onChange handler every time user changes quantity
                    onChange={e => { onInputChangeHandler(name, e.target.value) }}

                >
                    {/* Create a copy of an array with 100 item, then use the key() method which will return An array with each element is the index of the original 100 item */}
                    {[...Array(100).keys()].map((_, index) =>
                        <option
                            key={index}
                            value={index}
                        >
                            {index}
                        </option>)}
                </select>
            </li>
        )
    }
}