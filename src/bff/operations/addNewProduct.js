import { addProduct, getProducts } from "../api";

export const addNewProduct = async (data) => {
    await addProduct(data);

    const product = await getProducts();

    return {
        error: null,
        res: product,
    };
};
