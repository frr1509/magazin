import {
    getBasket,
    getUser,
    resetProductQuantity,
    resetTotalProduct,
} from "../api";

export const setNewQuantity = async (
    newQuantity,
    id,
    userId,
    userLogin,
    plusMinus,
) => {
    await resetProductQuantity(newQuantity, id, userId);
    const userBasket = await getBasket(userId);
    const user = await getUser(userLogin);
    const { totalProduct } = user;
    const newTotalProduct = totalProduct + plusMinus;
    await resetTotalProduct(userId, newTotalProduct);
    const newUser = await getUser(userLogin);
    sessionStorage.setItem("userData", JSON.stringify(newUser));
    return {
        error: null,
        res: {
            ...newUser,
            userBasket,
        },
    };
};
