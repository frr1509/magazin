import { getBasket, getUser } from "../api";

export const loadProductFromBasket = async (userLogin, userId) => {
    const userBasket = await getBasket(userId);
    const user = await getUser(userLogin);
    return {
        error: null,
        res: {
            ...user,
            userBasket,
        },
    };
};
