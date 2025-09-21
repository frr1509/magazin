import { setNewQuantity } from "./setNewQuantity";

export const setNewQuantityAsync =
    (requestServer, newQuantity, id, userId, userLogin, plusMinus) =>
    (dispatch) => {
        requestServer(
            "setNewQuantity",
            newQuantity,
            id,
            userId,
            userLogin,
            plusMinus,
        ).then((loadNewQuantity) => {
            dispatch(setNewQuantity(loadNewQuantity.res));
        });
    };
