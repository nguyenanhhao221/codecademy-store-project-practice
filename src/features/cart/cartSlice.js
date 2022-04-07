const initialState = {};

//addItem action creator
//run when user clicked on Add to Cart button
export const addItem = itemToAdd => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd
    }
}
//changeItemQuantity action creator
//name is the name of the product
export const changeItemQuantity = (name, newQuantity) => {
    return {
        type: 'cart/changeItemQuantity',
        payload: {
            name,
            newQuantity
        }
    }
}
export const cartReducer = (cart = initialState, action) => {
    switch (action.type) {
        case 'cart/addItem':
            const { name, price } = action.payload;

            //if the item already exist set quantity to +1, else set it it 1
            const quantity = cart[name] ? cart[name].quantity + 1 : 1;

            //newItem after calculate and add in quantity property
            const newItem = {
                price: price,
                quantity: quantity
            }
            return {
                ...cart,
                [name]: newItem
            };

        case 'cart/changeItemQuantity': {
            const { name, newQuantity } = action.payload;
            const itemToUpdate = cart[name];
            //example of itemToUpdate value: {quantity: 1, price: 17,99 USD}

            // Create a copy of itemToUpdate and update the quantity prop.
            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity
            }
            // Return a copy of the cart with the updatedItem included.
            return {
                ...cart,
                [name]: updatedItem
            }
        }


        default:
            return cart
    }
}