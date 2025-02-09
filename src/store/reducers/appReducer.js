import { ACTION_TYPE } from "../actions/action-types";

const initialState = {
    wasLogout: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOGOUT:
            return {
                ...state,
                wasLogout: !state.wasLogout,
            };
        default:
            return state;
    }
};
