import React from "react";

export const Cart = () => {
    return (
        <div id="cart-container" className="cart-container">
            {/* cart items here */}
            <h3 className="total">Total
                <span className="total-value"></span>
            </h3>
        </div>
    )
}