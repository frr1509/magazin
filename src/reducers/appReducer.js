import { ACTION_TYPE } from "../actions/actionTypes";

const initialState = {
    wasLogout: false,
    counter: 1,
    counterErrorFlag: false,
    modal: {
        isOpen: false,
        text: "",
        onConfirm: () => {},
        onCancel: () => {},
    },
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOGOUT:
            return {
                ...state,
                wasLogout: !state.wasLogout,
            };
        case ACTION_TYPE.SET_COUNTER:
            return {
                ...state,
                counter: action.payload,
            };
        case ACTION_TYPE.SET_COUNTER_ERROR_FLAG:
            return {
                ...state,
                counterErrorFlag: action.payload,
            };
        case ACTION_TYPE.OPEN_MODAL:
            return {
                modal: {
                    ...state.modal,
                    ...action.payload,
                    isOpen: true,
                },
            };
        case ACTION_TYPE.CLOSE_MODAL:
            return initialState;
        default:
            return state;
    }
};
