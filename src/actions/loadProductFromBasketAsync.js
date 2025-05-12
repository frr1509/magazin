import { setUserData } from "./setUserData";

export const loadProductFromBasketAsync =
    (requestServer, userLogin, userId) => (dispatch) => {
        requestServer("loadProductFromBasket", userLogin, userId).then(
            (loadProduct) => {
                dispatch(setUserData(loadProduct.res));
            },
        );
    };
