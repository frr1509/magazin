import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
    appReducer,
    userReducer,
    categorysReducer,
    productReducer,
    productsReducer,
} from "./reducers";

const reducer = combineReducers({
    app: appReducer,
    user: userReducer,
    categorys: categorysReducer,
    product: productReducer,
    products: productsReducer,
});

const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnchancers(applyMiddleware(thunk)),
);
