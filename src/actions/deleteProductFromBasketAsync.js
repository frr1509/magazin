import { setUserData } from "./setUserData";

export const deleteProductFromBasketAsync =
    (requestServer, quantity, id, userLogin, userId) => (dispatch) => {
        requestServer(
            "removeProductFromBasket",
            quantity,
            id,
            userLogin,
            userId,
        ).then((loadBasket) => {
            dispatch(setUserData(loadBasket.res));
        });
    };
