import {
    deleteProductFromBasket,
    getBasket,
    getUser,
    resetTotalProduct,
} from "../api";

export const removeBasket = async (userId, userLogin) => {
    const basket = await getBasket(userId);

    await resetTotalProduct(userId, 0);
    await Promise.all(basket.map(({ id }) => deleteProductFromBasket(id)));

    const user = await getUser(userLogin);
    const userBasket = await getBasket(userId);

    sessionStorage.setItem("userData", JSON.stringify(user));

    return {
        error: null,
        res: {
            ...user,
            userBasket,
        },
    };
};
