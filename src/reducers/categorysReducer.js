import { ACTION_TYPE } from "../actions";

const initialState = [];

export const categorysReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CATEGORYS_DATA:
            return [...action.payload];
        default:
            return state;
    }
};
