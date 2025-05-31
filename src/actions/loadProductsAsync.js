import { setProductsData } from "./setProductsData";

export const loadProductsAsync = (requestServer) => (dispatch) => {
    requestServer("fetchProducts").then((loadedProducts) => {
        dispatch(setProductsData(loadedProducts.res));
    });
};
