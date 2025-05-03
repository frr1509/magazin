import { transformProduct } from "../transforms";

export const getProduct = async (productId) =>
    fetch(`http://localhost:3005/products/${productId}`)
        .then((loadedProduct) => loadedProduct.json())
        .then(
            (loadedProduct) => loadedProduct && transformProduct(loadedProduct),
        );
