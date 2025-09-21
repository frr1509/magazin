import { deleteProduct, getProducts } from "../api";

export const removeProduct = async (id) => {
    await deleteProduct(id);

    const products = await getProducts();

    return {
        error: null,
        res: products,
    };
};
