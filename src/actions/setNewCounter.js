import { ACTION_TYPE } from "./actionTypes";

export const setNewCounter = (counter) => ({
    type: ACTION_TYPE.SET_COUNTER,
    payload: counter,
});
