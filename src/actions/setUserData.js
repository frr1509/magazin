import { ACTION_TYPE } from "./actionTypes";

export const setUserData = (userData) => ({
    type: ACTION_TYPE.SET_USER_DATA,
    payload: userData,
});
