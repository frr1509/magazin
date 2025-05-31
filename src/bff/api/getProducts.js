import { transformProduct } from "../transforms";

export const getProducts = async (productId) =>
    fetch(`http://localhost:3005/products`)
        .then((loadedProducts) => loadedProducts.json())
        .then(
            (loadedProducts) =>
                loadedProducts && loadedProducts.map(transformProduct),
        );
