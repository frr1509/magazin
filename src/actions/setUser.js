import { ACTION_TYPE } from "./actionTypes";

export const setUser = (user) => ({
    type: ACTION_TYPE.SET_USER,
    payload: user,
});
