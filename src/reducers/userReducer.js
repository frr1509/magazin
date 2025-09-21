import { ACTION_TYPE } from "../actions";
import { ROLE } from "../constans";

const initialUserState = {
    id: null,
    roleId: ROLE.GUEST,
    session: null,
    login: null,
    totalProduct: 0,
    userBasket: [],
};

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER:
            return {
                ...state,
                ...action.payload,
            };
        case ACTION_TYPE.LOGOUT:
            return {
                ...initialUserState,
            };
        case ACTION_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        case ACTION_TYPE.SET_NEW_QUANTITY:
            return {
                ...state,
                ...action.payload,
            };
        case ACTION_TYPE.SET_TOTAL_PRODUCT_PLUS:
            return {
                ...state,
                totalProduct: state.totalProduct + action.payload,
            };
        default:
            return state;
    }
};
