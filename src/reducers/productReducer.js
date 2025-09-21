import { ACTION_TYPE } from "../actions";

const initialState = {
    id: "",
    name: "",
    price: "",
    imageUrl: "",
    category: "",
    count: "",
    publishedAt: "",
    feedback: [],
};
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_PRODUCT_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
