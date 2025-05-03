import { ACTION_TYPE } from "./actionTypes";

export const setProductData = (productData) => ({
    type: ACTION_TYPE.SET_PRODUCT_DATA,
    payload: productData,
});
