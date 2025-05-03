import { getProduct } from "../api";

export const fetchProduct = async (productId) => {
    const post = await getProduct(productId);
    console.log(post);
    return {
        error: null,
        res: post,
    };
};
