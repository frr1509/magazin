import {
    deleteProductFromBasket,
    getBasket,
    getUser,
    resetTotalProduct,
} from "../api";

export const removeProductFromBasket = async (
    quantity,
    id,
    userLogin,
    userId,
) => {
    console.log(id)
    await deleteProductFromBasket(id);
    const user = await getUser(userLogin);
    const { totalProduct } = user;
    const newTotalProduct = Number(totalProduct) - Number(quantity);
    await resetTotalProduct(userId, newTotalProduct);
    const newUser = await getUser(userLogin);
    sessionStorage.setItem("userData", JSON.stringify(newUser));
    const userBasket = await getBasket(userId);

    return {
        error: null,
        res: {
            ...newUser,
            userBasket,
        },
    };
};
