export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

//redux
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    payload: productId 
});

export const updateProducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
})