import { ACTION_TYPE } from "./actionTypes";

export const setNewQuantity = (newQuantity) => ({
    type: ACTION_TYPE.SET_NEW_QUANTITY,
    payload: newQuantity,
});
