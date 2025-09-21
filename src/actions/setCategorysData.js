import { ACTION_TYPE } from "./actionTypes";

export const setCategorysData = (categorysData) => ({
    type: ACTION_TYPE.SET_CATEGORYS_DATA,
    payload: categorysData,
});
