import {
    addProductOnBasket,
    getBasket,
    getUser,
    resetProductQuantity,
    resetTotalProduct,
} from "../api";

export const addProductOnUserBasket = async (
    counter,
    userLogin,
    userId,
    imageUrl,
    name,
    count,
    price,
    id,
) => {
    const basket = await getBasket(userId);
    const foundProduct = basket.find((product) => product.id === id);
    const prevUser = await getUser(userLogin);
    const { totalProduct } = prevUser;
    const newTotalProduct = Number(totalProduct) + Number(counter);
    if (foundProduct) {
        const newQuantity = Number(foundProduct.quantity) + Number(counter);
        if (newQuantity > count) {
            return;
        }
        await resetProductQuantity(newQuantity, id, userId);
        await resetTotalProduct(userId, newTotalProduct);
    } else {
        await resetTotalProduct(userId, newTotalProduct);
        await addProductOnBasket(
            counter,
            userId,
            imageUrl,
            name,
            count,
            price,
            id,
        );
    }

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
