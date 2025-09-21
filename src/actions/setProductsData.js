import { ACTION_TYPE } from "./actionTypes";

export const setProductsData = (productsData) => ({
    type: ACTION_TYPE.SET_PRODUCTS_DATA,
    payload: productsData,
});
