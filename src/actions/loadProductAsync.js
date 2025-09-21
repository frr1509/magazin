import { setProductData } from "./setProductData";

export const loadProductAsync = (requestServer, id) => (dispatch) => {
    requestServer("fetchProduct", id).then((loadedProduct) => {
        dispatch(setProductData(loadedProduct.res));
    });
};
