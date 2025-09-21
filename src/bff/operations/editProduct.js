import { getProducts, resetProduct } from "../api";

export const editProduct = async (
    { name, price, count, image, category },
    id,
) => {
    console.log(id);
    await resetProduct(name, price, count, image, category, id);

    const products = await getProducts();

    return {
        error: null,
        res: products,
    };
};
