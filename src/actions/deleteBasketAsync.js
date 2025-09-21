import { setUserData } from "./setUserData";

export const deleteBasketAsync =
    (requestServer, id, userId, userLogin) => (dispatch) => {
        requestServer("removeBasket", id, userId, userLogin).then((loadData) =>
            dispatch(setUserData(loadData.res)),
        );
    };
