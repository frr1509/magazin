import { ACTION_TYPE } from "./actionTypes";

export const setCounterErrorFlag = (flag) => ({
    type: ACTION_TYPE.SET_COUNTER_ERROR_FLAG,
    payload: flag,
});
