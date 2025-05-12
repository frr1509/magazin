import { setCounterErrorFlag } from "./setCounterErrorFlag";
import { setUserData } from "./setUserData";

export const addProductOnUserBasketAsync =
    (
        requestServer,
        counter,
        userLogin,
        userId,
        imageUrl,
        name,
        count,
        price,
        id,
    ) =>
    (dispatch) => {
        requestServer(
            "addProductOnUserBasket",
            counter,
            userLogin,
            userId,
            imageUrl,
            name,
            count,
            price,
            id,
        ).then((userData) => {
            if (userData === undefined) {
                return (
                    dispatch(setCounterErrorFlag(true)),
                    setTimeout(() => {
                        dispatch(setCounterErrorFlag(false));
                    }, [2000])
                );
            }
            dispatch(setUserData(userData.res));
        });
    };
